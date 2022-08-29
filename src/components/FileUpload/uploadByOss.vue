<template>
  <div class="upload-file">
    <el-upload
      :action="uploadFileUrl"
      :before-upload="handleBeforeUpload"
      :file-list="fileList"
      :limit="limit"
      :on-error="handleUploadError"
      :on-exceed="handleExceed"
      :on-success="handleUploadSuccess"
      :show-file-list="false"
      :headers="headers"
      :http-request="handleUploadFile"
      class="upload-file-uploader"
      ref="upload"
    >
      <!-- 上传按钮 -->
      <el-button size="mini" type="primary">选取文件</el-button>
      <!-- 上传提示 -->
      <div class="el-upload__tip" slot="tip" v-if="showTip">
        请上传
        <template v-if="fileSize">
          大小不超过 <b style="color: #f56c6c">{{ fileSize }}MB</b>
        </template>
        <template v-if="fileType">
          格式为 <b style="color: #f56c6c">{{ fileType.join("/") }}</b>
        </template>
        的文件
      </div>
    </el-upload>

    <!-- 文件列表 -->
    <transition-group
      class="upload-file-list el-upload-list el-upload-list--text"
      name="el-fade-in-linear"
      tag="ul"
    >
      <li
        :key="file.uid"
        class="el-upload-list__item ele-upload-list__item-content"
        v-for="(file, index) in fileList"
      >
        <el-link
          :href="`${baseUrl}${file.url}`"
          :underline="false"
          target="_blank"
        >
          <span class="el-icon-document"> {{ getFileName(file.name) }} </span>
        </el-link>
        <div class="ele-upload-list__item-content-action">
          <el-link :underline="false" @click="handleDelete(index)" type="danger"
            >删除</el-link
          >
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
// 获取阿里云oss token api
import { getOssSgn } from "@/api/common";
export default {
  name: "FileUpload",
  props: {
    // 值
    value: [String, Object, Array],
    // 数量限制
    limit: {
      type: Number,
      default: 5,
    },
    // 大小限制(MB)
    fileSize: {
      type: Number,
      default: 2048,
    },
    // 文件类型, 例如['png', 'jpg', 'jpeg']
    fileType: {
      type: Array,
      default: () => ["doc", "docx",  "xls", "xlsx", "ppt", "pptx", "txt", "pdf", "mp4"],
    },
    // 是否显示提示
    isShowTip: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_API,
      uploadFileUrl: process.env.VUE_APP_BASE_API + "/common/upload", // 上传的图片服务器地址
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      fileList: [],
    };
  },
  watch: {
    value: {
      handler(val) {
        if (val) {
          let temp = 1;
          // 首先将值转为数组
          const list = Array.isArray(val) ? val : this.value.split(",");
          // 然后将数组转为对象数组
          this.fileList = list.map((item) => {
            if (typeof item === "string") {
              item = { name: item, url: item };
            }
            item.uid = item.uid || new Date().getTime() + temp++;
            return item;
          });
        } else {
          this.fileList = [];
          return [];
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    // 是否显示提示
    showTip() {
      return this.isShowTip && (this.fileType || this.fileSize);
    },
  },
  methods: {
    // 生成随机数
    randomString(len) {
      len = len || 32;
      const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
      const maxPos = chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    },

    // 截取上传文件后缀
    getSuffix(filename) {
      let pos = filename.lastIndexOf(".");
      let suffix = "";
      if (pos != -1) suffix = filename.substring(pos);
      return suffix;
    },

    handleUploadFile(file) {
      console.log(file);
      getOssSgn()
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            let picName =this.randomString(10) + this.getSuffix(file.file.name);
            let keyValue = res.data.dir + picName;
            //注意formData里append添加的键的大小写
            let formData = new FormData();
            formData.append("name", file.file.name); // 文件名称
            formData.append("key", keyValue); // 存储在oss的文件路径
            formData.append("OSSAccessKeyId", res.data.accessid); // //accessKeyId
            formData.append("policy", res.data.policy); // policy
            formData.append("Signature", res.data.signature); //签名
            formData.append("success_action_status", 200);
            formData.append("file", file.file, file.file.name); // 如果是base64文件，那么直接把base64字符串转成blob对象进行上传即可
            console.log(formData);
            this.progressFlag = true;
            return new Promise((resolve, reject) => {
              let url = `https://${res.data.bucketName}.${res.data.host}`;
              this.$axios
                .post(url, formData, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                  // 图片上传进度
                  onUploadProgress: (progressEvent) => {
                    this.progressPercent = Math.floor(
                      (progressEvent.loaded * 100) / progressEvent.total
                    );
                  },
                })
                .then((rep) => {
                  if (rep.status === 200) {
                    this.imageUrl = url + "/" + keyValue;
                    // this.fileList.push({ name: file.file.name, url: this.imageUrl })
                    console.log(this.fileList);
                    this.$emit("input", this.imageUrl);
                    this.$emit("uploadSuccess", {fileSize: file.file.size});
                    console.log("Uploaded successfully", rep);
                    this.loading.close();
                    if (this.progressPercent >= 100) {
                      this.progressFlag = false;
                      setTimeout(() => {
                        this.progressPercent = 0;
                      }, 1000);
                    }
                  }
                  resolve(rep);
                })
                .catch((err) => {
                  reject(err);
                });
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.loading.close();
        });
    },

    // 上传前校检格式和大小
    handleBeforeUpload(file) {
      // 校检文件类型
      if (this.fileType) {
        let fileExtension = "";
        if (file.name.lastIndexOf(".") > -1) {
          fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
        }
        const isTypeOk = this.fileType.some((type) => {
          if (file.type.indexOf(type) > -1) return true;
          if (fileExtension && fileExtension.indexOf(type) > -1) return true;
          return false;
        });
        if (!isTypeOk) {
          this.$message.error(
            `文件格式不正确, 请上传${this.fileType.join("/")}格式文件!`
          );
          return false;
        }
      }
      // 校检文件大小
      if (this.fileSize) {
        const isLt = file.size / 1024 / 1024 < this.fileSize;
        if (!isLt) {
          this.$message.error(`上传文件大小不能超过 ${this.fileSize} MB!`);
          return false;
        }
      }
      return true;
    },
    // 文件个数超出
    handleExceed() {
      this.$message.error(`上传文件数量不能超过 ${this.limit} 个!`);
    },
    // 上传失败
    handleUploadError(err) {
      this.$message.error("上传失败, 请重试");
    },
    // 上传成功回调
    handleUploadSuccess(res, file) {
      this.$message.success("上传成功");
      this.fileList.push({ name: res.fileName, url: res.fileName });
      this.$emit("input", this.listToString(this.fileList));
    },
    // 删除文件
    handleDelete(index) {
      this.fileList.splice(index, 1);
      this.$emit("input", this.listToString(this.fileList));
    },
    // 获取文件名称
    getFileName(name) {
      if (name.lastIndexOf("/") > -1) {
        return name.slice(name.lastIndexOf("/") + 1).toLowerCase();
      } else {
        return "";
      }
    },
    // 对象转成指定字符串分隔
    listToString(list, separator) {
      let strs = "";
      separator = separator || ",";
      for (let i in list) {
        strs += list[i].url + separator;
      }
      return strs != "" ? strs.substr(0, strs.length - 1) : "";
    },
  },
};
</script>

<style scoped lang="scss">
.upload-file-uploader {
  margin-bottom: 5px;
}
.upload-file-list .el-upload-list__item {
  border: 1px solid #e4e7ed;
  line-height: 2;
  margin-bottom: 10px;
  position: relative;
}
.upload-file-list .ele-upload-list__item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: inherit;
}
.ele-upload-list__item-content-action .el-link {
  margin-right: 10px;
}
</style>

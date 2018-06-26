<template>
	<div class="step-c">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem label="电影名称:" prop="videoName">
            <i-input v-model="formValidate.videoName" placeholder="请输入影片全称"></i-input>
        </FormItem>
        <FormItem label="影片语言:" prop="videoLanguage">
            <Select v-model="formValidate.videoLanguage" placeholder="选择影片所用语言">
                <Option value="Chiese">中文</Option>
                <Option value="English">英文</Option>
            </Select>
        </FormItem>
        <FormItem label="影片分类:" prop="videoClassification">
            <CheckboxGroup v-model="formValidate.videoClassification">
                <Checkbox label="故事片"></Checkbox>
                <Checkbox label="动漫片"></Checkbox>
                <Checkbox label="实验片"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="影片类型:" prop="videoCategory">
            <CheckboxGroup v-model="formValidate.videoCategory">
                <Checkbox label="剧情片"></Checkbox>
                <Checkbox label="动作片"></Checkbox>
                <Checkbox label="喜剧片"></Checkbox>
                <Checkbox label="战争片"></Checkbox>
                <Checkbox label="科幻片"></Checkbox>
                <Checkbox label="伦理片"></Checkbox>
                <Checkbox label="恐怖片"></Checkbox>
                <Checkbox label="惊悚片"></Checkbox>
                <Checkbox label="动画片"></Checkbox>
                <Checkbox label="冒险片"></Checkbox>
                <Checkbox label="犯罪片"></Checkbox>
                <Checkbox label="家庭"></Checkbox>
                <Checkbox label="音乐"></Checkbox>
                <Checkbox label="历史"></Checkbox>
                <Checkbox label="其他"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="影片题材:" prop="videoSubject">
            <CheckboxGroup v-model="formValidate.videoSubject">
                <Checkbox label="环境保护"></Checkbox>
                <Checkbox label="儿童"></Checkbox>
                <Checkbox label="人文"></Checkbox>
                <Checkbox label="动物"></Checkbox>
                <Checkbox label="美食"></Checkbox>
                <Checkbox label="女性主题"></Checkbox>
                <Checkbox label="教育"></Checkbox>
                <Checkbox label="都市"></Checkbox>
                <Checkbox label="校园"></Checkbox>
                <Checkbox label="体育"></Checkbox>
                <Checkbox label="其他"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="对白字幕:" prop="videoSubtitle">
            <Select v-model="formValidate.videoSubtitle" placeholder="选择对白字幕所用语言">
                <Option value="Chiese">中文</Option>
                <Option value="English">英文</Option>
            </Select>
        </FormItem>
        <FormItem label="片长:" prop="videoLength">
            <i-input v-model="formValidate.videoLength" placeholder="请输入影片时长。输入格式：00:00:00"></i-input>
        </FormItem>
        <FormItem label="声音规格:" prop="soundFormat">
            <Select v-model="formValidate.soundFormat" placeholder="请选择声音规格">
                <Option value="Momo">Momo</Option>
            </Select>
        </FormItem>
        <FormItem label="影片形式:" prop="videoForms">
            <Select v-model="formValidate.videoForms" placeholder="请选择影片形式">
                <Option value="2D">2D</Option>
            </Select>
        </FormItem>
        <FormItem label="影片规格:" prop="videoSpecifications">
            <Select v-model="formValidate.videoSpecifications" placeholder="请选择影片规格">
                <Option value="Chiese">数字</Option>
            </Select>
        </FormItem>
        <FormItem label="画面颜色:" prop="videoColor">
            <Select v-model="formValidate.videoColor" placeholder="请选择画面颜色">
                <Option value="Chiese">黑白</Option>
                <Option value="English">英文</Option>
            </Select>
        </FormItem>
        <FormItem label="视频格式:" prop="videoFormat">
            <Select v-model="formValidate.videoFormat" placeholder="请选择视频所用格式">
                <Option value="hdv">HDV</Option>
                <Option value="mov">MOV</Option>
            </Select>
        </FormItem>
        <FormItem label="拍摄国家:" prop="filmingCountry">
            <i-input v-model="formValidate.name" placeholder="请输入拍摄所在地"></i-input>
        </FormItem>
        <FormItem label="上线日期:" prop="onlineDate">
            <DatePicker type="date" placeholder="Select date" v-model="formValidate.onlineDate" style="width: 100%"></DatePicker>
        </FormItem>
        <FormItem label="完成日期:"  prop="finishDate">
            <DatePicker type="date" placeholder="Select date" v-model="formValidate.finishDate" style="width: 100%"></DatePicker>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
	</div>
</template>

<script type="text/ECMAScript-6">
  export default {
    data () {
        return {
            formValidate: {
                videoName: '',
                videoLanguage: '',
                videoClassification: [],
                videoCategory: [],
                videoSubject: [],
                videoSubtitle: '',
                videoLength: '',
                soundFormat: '',
                videoForms: '',
                videoSpecifications: '',
                videoColor: '',
                videoFormat: '',
                filmingCountry: '',
                onlineDate: '',
                finishDate: '',
            },
            ruleValidate: {
                videoName: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                videoLanguage: [
                    { required: true, message: '请选择影片所用语言', trigger: 'change' }
                ],
                videoClassification: [
                    { required: true, type: 'array', min: 1, message: '请为影片进行类别选择', trigger: 'change' },
                    { type: 'array', max: 1, message: '请至少选择一项所属类别', trigger: 'change' }
                ],
                videoCategory: [
                    { required: true, type: 'array', min: 1, message: '请选择影片所属类型', trigger: 'change' },
                    { type: 'array', max: 1, message: '请至少选择一项所属类型', trigger: 'change' }
                ],
                videoSubject: [
                    { required: true, type: 'array', min: 1, message: '请选择影片所属题材', trigger: 'change' },
                    { type: 'array', max: 1, message: '请至少选择一项所属题材', trigger: 'change' }
                ],
                videoSubtitle: [
                    { required: true, message: '请选择对白字幕所用语言', trigger: 'change' }
                ],
                videoLength: [
                    { required: true, message: '影片时长不能为空。格式：00:00:00', trigger: 'blur' }
                ],
                soundFormat: [
                    { required: true, message: '声音规格不能为空', trigger: 'change' }
                ],
                videoForms: [
                    { required: true, message: '影片形式不能为空', trigger: 'change' }
                ],
                videoSpecifications: [
                    { required: true, message: '影片规格不能为空', trigger: 'change' }
                ],
                videoColor: [
                    { required: true, message: '画面颜色不能为空', trigger: 'change' }
                ],
                videoFormat: [
                    { required: true, message: '视频格式不能为空', trigger: 'change' }
                ],
                filmingCountry: [
                    { required: true, message: '拍摄地点不能为空', trigger: 'blur' }
                ],
                onlineDate: [
                    { required: true, type: 'date', message: '上线日期不能为空', trigger: 'change' }
                ],
                finishDate: [
                    { required: true, type: 'date', message: '完成日期不能为空', trigger: 'change' }
                ]
            }
        };
    },
    created(){
      this.menu();
    },
    methods: {
        menu() {
            window.scrollTo(0,0);
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            });
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
</style>
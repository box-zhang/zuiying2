<template>
	<div class="step-c">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="电影名称" prop="name">
            <i-input v-model="formValidate.name" placeholder="请输入电影全称"></i-input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
            <i-input v-model="formValidate.mail" placeholder="请输入你的邮箱"></i-input>
        </FormItem>
        <FormItem label="影片语言" prop="city">
            <Select v-model="formValidate.city" placeholder="选择影片所用语言">
                <Option value="Chiese">中文</Option>
                <Option value="English">英文</Option>
            </Select>
        </FormItem>
        <FormItem label="影片分类" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="故事片"></Checkbox>
                <Checkbox label="动漫片"></Checkbox>
                <Checkbox label="实验片"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="影片类型" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="故事片"></Checkbox>
                <Checkbox label="动漫片"></Checkbox>
                <Checkbox label="实验片"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="影片题材" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="故事片"></Checkbox>
                <Checkbox label="动漫片"></Checkbox>
                <Checkbox label="实验片"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="对白字幕" prop="city">
            <Select v-model="formValidate.city" placeholder="选择对白所用语言">
                <Option value="Chiese">中文</Option>
                <Option value="English">英文</Option>
            </Select>
        </FormItem>
        <FormItem label="片长" prop="movieLong">
            <i-input v-model="formValidate.movieLong" placeholder="请输入电影全称"></i-input>
        </FormItem>
        <FormItem label="声音规格" prop="city">
            <Select v-model="formValidate.city" placeholder="选择对白所用语言">
                <Option value="Chiese">中文</Option>
                <Option value="English">英文</Option>
            </Select>
        </FormItem>
        <FormItem label="影片形式" prop="city">
            <Select v-model="formValidate.city" placeholder="选择对白所用语言">
                <Option value="Chiese">中文</Option>
                <Option value="English">英文</Option>
            </Select>
        </FormItem>
        <FormItem label="影片规格" prop="city">
            <Select v-model="formValidate.city" placeholder="选择对白所用语言">
                <Option value="Chiese">中文</Option>
                <Option value="English">英文</Option>
            </Select>
        </FormItem>
        <FormItem label="画面颜色" prop="city">
            <Select v-model="formValidate.city" placeholder="选择对白所用语言">
                <Option value="Chiese">中文</Option>
                <Option value="English">英文</Option>
            </Select>
        </FormItem>
        <FormItem label="视频格式" prop="city">
            <Select v-model="formValidate.city" placeholder="选择对白所用语言">
                <Option value="Chiese">中文</Option>
                <Option value="English">英文</Option>
            </Select>
        </FormItem>
        <FormItem label="拍摄国家" prop="name">
            <i-input v-model="formValidate.name" placeholder="请输入电影全称"></i-input>
        </FormItem>
        <FormItem label="上线日期" prop="date">
            <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
           <!--  <Row>
                <i-col span="24">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                </i-col>
            </Row> -->
        </FormItem>
        <FormItem label="完成日期"  prop="date">
            <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
            <!-- <Row>
                <i-col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                </i-col>
            </Row> -->
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
                name: '',
                mail: '',
                city: '',
                gender: '',
                interest: [],
                date: '',
                time: '',
                desc: ''
            },
            ruleValidate: {
                name: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                mail: [
                    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                ],
                city: [
                    { required: true, message: 'Please select the city', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: 'Please select gender', trigger: 'change' }
                ],
                interest: [
                    { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                ],
                date: [
                    { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                ],
                time: [
                    { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
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
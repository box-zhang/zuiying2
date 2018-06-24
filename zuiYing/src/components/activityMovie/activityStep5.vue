<template>
    <div class="step-c">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem label="制片人:" prop="workerProduction">
            <i-input v-model="formValidate.workerProduction" placeholder="制片人"></i-input>
        </FormItem>
        <FormItem label="摄影师:" prop="workerCamerist">
            <i-input v-model="formValidate.workerCamerist" placeholder="摄影师"></i-input>
        </FormItem>
        <FormItem label="编剧:" prop="workerWriter">
            <i-input v-model="formValidate.workerWriter" placeholder="编剧"></i-input>
        </FormItem>
        <FormItem label="美术师:" prop="workerMakeUpArtist">
            <i-input v-model="formValidate.workerMakeUpArtist" placeholder="美术师"></i-input>
        </FormItem>
        <FormItem label="剪辑师:" prop="workerFilmCutter">
            <i-input v-model="formValidate.workerFilmCutter" placeholder="剪辑师"></i-input>
        </FormItem>
        <FormItem label="艺术指导:" prop="workerArtist">
            <i-input v-model="formValidate.workerArtist" placeholder="艺术指导"></i-input>
        </FormItem>
        <FormItem label="动画制作:" prop="workerAnimation">
            <i-input v-model="formValidate.workerAnimation" placeholder="动画制作"></i-input>
        </FormItem>
        <FormItem label="特效制作:" prop="workerSpecialEffects">
            <i-input v-model="formValidate.workerSpecialEffects" placeholder="特效制作"></i-input>
        </FormItem>
        <FormItem label="原创音乐:" prop="workerMusic">
            <i-input v-model="formValidate.workerMusic" placeholder="原创音乐"></i-input>
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
                workerProduction: '',
                workerCamerist: '',
                workerWriter: '',
                workerMakeUpArtist: '',
                workerFilmCutter: '',
                workerArtist: '',
                workerAnimation: '',
                workerSpecialEffects: '',
                workerMusic: '',

            },
            ruleValidate: {
                workerProduction: [
                    { required: true, message: '制片人姓名不能为空', trigger: 'blur' }
                ],
                workerCamerist: [
                    { required: true, message: '摄影师姓名不能为空', trigger: 'blur' }
                ],
                workerWriter: [
                    { required: true, message: '编剧姓名不能为空', trigger: 'blur' }
                ],
                workerMakeUpArtist: [
                    { required: true, message: '美术师姓名不能为空', trigger: 'blur' }
                ],
                workerFilmCutter: [
                    { required: true, message: '剪辑师姓名不能为空', trigger: 'blur' }
                ],
                workerArtist: [
                    { required: true, message: '艺术指导姓名不能为空', trigger: 'blur' }
                ],
                workerAnimation: [
                    { required: true, message: '动画制作姓名不能为空', trigger: 'blur' }
                ],
                workerSpecialEffects: [
                    { required: true, message: '特效制作姓名不能为空', trigger: 'blur' }
                ],
                workerMusic: [
                    { required: true, message: '音乐人姓名不能为空', trigger: 'blur' }
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
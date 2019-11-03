<template src="./login.pug" lang="pug"></template>
<style src="./login.scss" lang="scss" scoped></style>

<script>
    import { validationMixin } from 'vuelidate';
    import { required } from 'vuelidate/lib/validators'
    import {AUTH_REQUEST} from '@/store/actions/auth'

    export default {
        mixins: [validationMixin],
        validations: {
            login: {
                required,
            },
            password: {
                required,
            }
        },

        data: () => ({
            login: '',
            password: ''
        }),

        methods: {
            submit() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                } else {
                    this.$store.dispatch(AUTH_REQUEST, {
                        login: this.login,
                        password: this.password
                    });
                }
            }
        }
    }
</script>

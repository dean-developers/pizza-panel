<template src="./login.pug" lang="pug"></template>
<style src="./login.scss" lang="scss" scoped></style>

<script>
import { validationMixin } from 'vuelidate';
import validate from '@/mixins/validate'
import { required } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin, validate],
    validations: {
        login: {
            required
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
                this.$store.dispatch('authRequest', {
                    login: this.login,
                    password: this.password
                });
            }
        }
    }
}
</script>

<template src="./login.pug" lang="pug"></template>
<style src="./login.scss" lang="scss" scoped></style>

<script>
import { validationMixin } from 'vuelidate';
import validate from '@/mixins/validate'
import { required } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'

export default {
    mixins: [validationMixin, validate],

    data: () => ({
        login: null,
        password: null
    }),

    validations: {
        login: {
            required
        },
        password: {
            required,
        }
    },

    computed: {
        ...mapState({
            user: state => state.app.user
        })
    },

    methods: {
        async submit() {
            if (this.$v.$invalid) {
                this.$v.$touch();
            } else {
                await this.$store.dispatch('authRequest', {
                    login: this.login,
                    password: this.password
                });

                this.$socket.client.emit('login', {
                    id: this.user && this.user.id
                })
            }
        }
    }
}
</script>

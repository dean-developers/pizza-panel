const priorityOfValidators = {
    required: 1,
    numeric: 2,
    minValue: 3,
    minLength: 3,
    length: 4
};
export default {
    methods: {
        getValidateMessage: function(page, fieldPath, localePath) {
            let field = this.$v;

            fieldPath.split('.').forEach(item => {
                if (field[item]) {
                    field = field[item];
                }
            });

            if (field && typeof field === 'object') {
                const errorProperties = Object.keys(field).filter(it => !it.includes('$')).sort((a, b) => {
                    return (priorityOfValidators[a] || 10) - (priorityOfValidators[b] || 10);
                });

                if (!errorProperties.length && field.$invalid && field.$dirty) {
                    return this.$vuetify.t('$vuetify.errors.unknown');
                } else if (errorProperties.length && field.$invalid && field.$dirty) {
                    let message = `$vuetify.validate.${page}`;

                    for (const property of errorProperties) {
                        if (!field[property]) {
                            (localePath || fieldPath).split('.').forEach(item => {
                                message = [message, item].join('.');
                            });

                            message = [message, property].join('.');
                            break;
                        }
                    }

                    return this.$vuetify.lang.t(message);
                }
            }

            return '';
        }
    }
};

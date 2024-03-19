export const commandOptions = [
    { category: 'FTP', label: 'Upload Remessa FTP', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Aprovar Remessa', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Verificar Remessa Qualificada', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Upload Retorno', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Verificar Retorno Qualificado', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },


    { category: 'CREATE USER', label: 'Make Credit User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Current Account User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Cambio User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Finvendas User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Ancora User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Referral User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },

    { category: 'CUC', label: 'CUC CREDIT', value: 'MIX_ENV=qa mix test test/regression/non_ui/cuc/cuc_credit_test.exs' },
    { category: 'CUC', label: 'CUC CURRENT ACCOUNT', value: 'MIX_ENV=qa mix test test/regression/non_ui/cuc/cuc_current_account_test.exs' },
  ];

export const environmentOptions = ['qa', 'qa2', 'qa-venus'];

export const categories = ['FTP', 'CREATE USER', 'CUC']

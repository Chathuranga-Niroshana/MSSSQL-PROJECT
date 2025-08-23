
export const COST_CENTER_TABLES_COLUMNS = [
    {
        table: 'Master1',
        columns: [
            'Code',
            'MasterType',
            'Name',
            'Alias',
            'ParentGrp',   // Account Group
            'Stamp',
            'CreatedBy',
            'CreationTime',
            'ModifiedBy',
            'ModificationTime',
        ]
    },
    {
        table: 'Help1',
        columns: [
            'Code',
            'RecType',
            'NameAlias',
            'NameOrAlias',  // if 1 NameAlias is acc name, if 2 it is alias
            'MasterType',
            'ParentGroup',   // Account Group
            'MasterSeries',
            'Status',
            'DefaultMCCode'
        ]
    },
    {
        table: 'Folio1',
        columns: [
            'MasterCode',
            'MasterType',
            // 'D1', // op. Bal.
        ]
    }
]
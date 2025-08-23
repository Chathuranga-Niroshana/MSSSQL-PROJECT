
export const ACCOUNT_GROUP_TABLES_COLUMNS = [
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
        table: 'MastFootPrint',
        columns: [
            'Name',
            'MasterCode',
            'MasterType',
            'Stamp',
            'PartialFP',
            'RemainFP',
        ]
    },
    {
        table: 'Folio1',
        columns: [
            'MasterCode',
            'MasterType',
        ]
    }
]
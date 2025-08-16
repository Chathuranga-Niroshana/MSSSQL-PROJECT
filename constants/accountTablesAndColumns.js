
export const ACCOUNT_TABLES_COLUMNS = [
    {
        table: 'Master1',
        columns: [
            'Code',
            'MasterType',
            'Name',
            'Alias',
            'PrintName',
            'ParentGrp',   // Account Group
            'Stamp',
            'CreatedBy',
            'CreationTime',
            'ModifiedBy',
            'ModificationTime',
            'AuthorisedBy',
            'AuthorisationTime',
            'ApprovalStatus',
            'SyncStatus',
            'MasterSeriesGrp',
            'Source',
            'BlockedMaster',
            'DeactiveMaster',
            'TPF1',
            'TPF2',
            'RejectionStatus',
            'AppSync'
        ]
    },
    {
        table: 'MasterAddressInfo',
        columns: [
            'MasterCode',
            'Address1',
            'Address2',
            'Address3',
            'Address4',
            'TelNo',
            'Fax',
            'Email',
            'Mobile',
            'LST',
            'CST',    // SVAT
            'ST37',
            'TINNo',   // VAT
            'LBTNo',
            'ITPAN',
            'ITWard',
            'Contact',
            'CountryCodeLong', // country code -> from Master1 table master code
            'StateCodeLong',
            'CityCodeLong',
            'RegionCodeLong',
            'AreaCodeLong',
            'ContDeptCodeLong',
            'PINCode',
            'Transport',
            'Station',
            'AccNo',
            'Date1',
            'Date2',
            'Date3',
            'Date4',
            'Date5',
            'Date6',
            'Date7',
            'Date8',
            'C4',  // Bank Name
            'C5', // IFSC Code
            'Distance',
            'TransportMode',
            'WhatsAppNo'
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
            'AdditionalInfo',
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
        table: 'Help1AddnInfo',
        columns: [  // there are 2 rows (or more) for each account. 1 has NameAlias and 1 has NameOrAlias 2 
            'Code',
            'NameAlias',
            'NameOrAlias',  // if 1 NameAlias is acc name, if 2 it is alias
            'AddnInfoBT1',  // -> Address : Address1, Address2
            'AddnInfoBT2',  // ->  Address3, Address4
            'AddnInfoBT3',  // -> Contact : Contact Person / Tel No
            'AddnInfoBT4',  // -> TIN/CST : VAT/SVAT
        ]
    },
    {
        table: 'Folio1',
        columns: [
            'MasterCode',
            'MasterType',
            'D1', // Opening Balance
            'D2',
            'D3',
            'D4', // Prev Year Balance
            'D5',
            'D6',
            'D7',
            'D8',
            'D9',
            //  there are to D150
            'B1',
            'B2',
            'B3',
            'B4',
            'B5',
            'B6',
            'B7',
            'B8',
            'B9',
            'B10',
            'B11',
            'B12'
        ]
    },
    {
        table: 'Images',
        columns: [
            'Type',
            'Code',
            'Image1', // { type: "Image", "data": "dnwanljdwjj12381" }
            'FormatType1', // Image format type (e.g., 'png', 'jpg')
            'Image2', // { type: "Image", "data": "dnwanljdwjj12382" }
            'FormatType2', // Image format type (e.g., 'png', 'jpg')
        ]
    },
    // {
    //     table: 'Help2',
    //     columns: [
    //         'ReqType1',
    //         'ReqType2',
    //         'ReqType3',
    //         'Name'
    //     ]
    // }
]
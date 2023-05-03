//*============= User Endpoints begins =============*//
// Enterprise Details
export const pdetails = `{
    status: "202",
    message: "Business Detail",
    data: [
      {
        org_name: "TesterNG",
        role_name: null,
        pk_live: "huSXXXXXXxxxxxxxxx6AselUcWfLIubZF",
        pk_test: "082b3135-xxx-xxx-xxx-xxxx",
        sk_test: "b7abxx-8fxxxd-5xxd-bxxx3-xxxxxxx",
        email: "doe.john@doe.com",
        mobile_phone: "1234567890",
        firstname: "John",
        lastname: "Doe",
      },
    ],
    account: [
      {
        bankname: "WEMA",
        account_name: "TesterNG",
        acno: "8622568401",
        last_balance: 0,
        current_balance: 0,
      },
    ],
  }`;
export const pdetailsEp = `axios.get(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getpersonaldetail",
    {
      headers: {
        token: "putyourpublickeyhere",
      },
    }
  )`;
//   Single Customer Details
export const getacustomer = `{
    status: "202",
    message: "Customer Detail",
    datetime: "2023-04-11 13:6:17",
    data: [
      {
        customer_id: "fcfa7433-a92f-55ac-8c4d-bf727e278117",
        first_name: "John",
        last_name: "Doe",
        mobile_number: "12334567889",
        email: "johndoe@gmail.com",
        address: null,
        bvn: "123456789",
        nin: "12223457",
      },
    ],
    account: [
      {
        referece_id: "3931239018",
        last_balance: 100,
        current_balance: 0,
      },
    ],
  }`;
export const getacustomerEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getacustomer",
    {
      customer_id: "fcfa7433-a92f-55ac-8c4d-bf727e78117",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;
//   Multiple / All Customers
export const getCustomers = `{
    status: "202",
    message: "Customer List",
    data: [
      {
        customer_id: "2926352b-4225-5002-b89e-f72b8bdca522",
        first_name: "Encrypt",
        last_name: "Box",
        mobile_number: "2134558",
        email: "johndoe@yahoo.com",
        address: null,
        bvn: "23456789898765",
        nin: "12223457",
      },
      {
        customer_id: "90c119d8-3498-530f-add1-b4e841a2c2d8",
        first_name: "Pyrr",
        last_name: "jagua",
        mobile_number: "081123456775",
        email: "johndoe@yahoo.com",
        address: null,
        bvn: "23456789898765",
        nin: "12223457",
      },
      {
        customer_id: "52ca1762-a761-53f8-9343-cb027d790e97",
        first_name: "xee",
        last_name: "Doe",
        mobile_number: "08112345789",
        email: "johndoe@yahoo.com",
        address: null,
        bvn: "234567898987658",
        nin: "12223457",
      },
      ...{
        customer_id: "fcfa7433-a92f-55ac-8c4d-bf727e278117",
        first_name: "Jin",
        last_name: "Xu",
        mobile_number: "1234567890",
        email: "jinxu@xu.com",
        address: null,
        bvn: "23456789898765",
        nin: "12223457",
      },
    ],
  }`;
export const getCustomersEP = `axios.get(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getcustomers",
    {
      headers: {
        token: "putyourpublickeyhere",
      },
    }
  )`;
//   Create account
export const createReq = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/createaccount",
    {
      reference: "e87f2dxvdrwew45345dd432",
      first_name: "John",
      last_name: "Doe",
      mobile_number: "+1234578990",
      email: "johndoe@doe.com",
      address: "John Doe to the Moon",
      bvn: "0987654332",
      nin: "12345789",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;

//   User verification

export const verifyUser = `{
  statuscode: 202,
  message: "Customer Status",
  verification_status: {
    bvn_status: "Not verified",
    nin_status: "Not verified",
  },
}`;
export const verifyUserEp = `axios.post(
  "https://dashboard.encryptbox.co.uk/api/v1/live/getbalance",
  {
    customer_id: "fcfa7433-a92f-55ac-8c4d-bf727e278117",
  },
  {
    headers: {
      token: "putyourpublickeyhere",
      "Content-Type": "application/json",
    },
  }
)`;

//*============= User Endpoints Ends =============*//

//*=============voucher Endpoints begins =============*//
// Balance Endpoints
export const getbalance = `{
    status: "202",
    customer_id: "fcfa7433-a92f-55ac-8c4d-bf727e278117",
    message: "Customer Balance",
    time: "2023-04-11 13:53:43",
    last_balance: 100,
    current_balance: 0,
  }`;
export const getbalanceEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getbalance",
    {
      customer_id: "fcfa7433-a92f-55ac-8c4d-bf727e78117",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;
//   Transfer Endpoints
export const transfer = `{
    statuscode: "202",
    status: true,
    message: "Transfer successful",
    current_balance: 4900,
  }`;
export const transferEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/transfer",
    {
      "reference": "hje-kjke-kjkjeker-ekjreytuje",
      "sender_id": "90c119d8-3498-530f-add1-b4e841a2c2d8",
      "receiver_email": "mikxenon@gmail.com",
      "amount": "800",
      "currency": "NGN",
      "transaction_desc": "this is my first test"      
    },
    {
      headers: {
        token: "putyourpublickeyhere",
      },
    }
  )`;
//   Sell Endpoints
export const sell = ` {
    statuscode: "202",
    status: "Transaction Succesful",
    account: {
      tran_reference: "fgfgf-uifvklf-jkdkckdfe",
      message: "Balance",
      current_balance: 38987,
      date: "2023-04-11 14:47:11",
    },
  }`;

export const sellEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/sell",
    {
      "reference": "Doe-uifvklf-jkdkckdfe",
      "sender_id": "90c119d8-3498-530f-add1-b4e841a2c2d8",
      "bank_name": "GT Bank",
      "bank_code": "809",
      "account_name":"John Doee",
      "account_number": "123457890",
      "amount": "13",
      "currency": "NGN",
      "transaction_desc": "I am sending you this precious gift"
    },
    {
      headers: {
        token: "putyourpublickeyhere",
      },
    }
  )`;

//*=============Voucher Endpoints ends =============*//

//*=============Crypto Endpoints begins =============*//
//||**************Verify Transaction**************|||
export const verifyTransaction = `{
    status: "202",
    message: "A Transaction",
    data: [
      {
        transaction_id: "refe966605568.9f03bad5-5396-40ab-ba34-58643c18e747",
        source_acct: "johndoe@gmail.com",
        destination_acct: "8935320250",
        trans_type: "credit",
        transaction_desc: "Testing busd on  encryptbox",
        transaction_amount: "600.00",
        response_code: "200",
        response_message: "successful ",
        transaction_date: "2023-04-21T10:53:32.000Z",
      },
    ],
  }`;

export const verifyTransactionEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/verifytransaction",
    {
      transaction_id: "refe966605568.9f03bad5-5396-40ab-ba34-58643c18e747",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;

//||************** Transaction Fee**************|||
export const TXFee = `{
    statuscode: 202,
    message: "Gas Fee",
    gas_fees: 0.15,
  }`;
export const TXFeeEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getFee",
    {
      coin: "BUSD",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;
//||**************Available Coin**************|||
export const availableCoin = `{
    status: "202",
    message: "Available coin List",
    data: [
      {
        coin_id: 1,
        coin_name: "busd",
      },
    ],
  }`;
export const getavailablecoinEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/availablecoin",
   {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;
//||**************Buy Rate**************|||
export const getbuyrate = `{
    statuscode: "202",
    status: true,
    coin: 2.600780234070221,
    rate: 769,
    updated_at: "2023-04-11T10:58:45.000Z",
  }`;
export const getbuyrateEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getbuyrate",
    {
      amount: 2000,
      coin_name: "bus",
      status: "buy",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;
//||**************Sell Rate**************|||
export const getsellrate = `{
    statuscode: "202",
    status: true,
    amount: 11550,
    rate: 770,
    updated_at: "2023-04-06T12:23:52.000Z",
  }`;
export const getsellrateEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getsellrate",
    {
      coin: 15,
      coin_name: "busd",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;
//||**************Buy Coin**************|||
export const buycoin = `{
    statuscode: "202",
    status: true,
    message: "Transfer successful",
    current_balance: 220,
    coin_quantity: 0.12990387113535984,
  }`;
export const buycoinEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/buycoin",
    {
      reference: "reference96665568",
      sender_id: "fcfa7433-a92f-55ac-8c4d-bf727e278117",
      amount: "100git ",
      currency: "msme",
      wallet_address: "0xBed65907D3cE38a36E09897ab2f709E2B9563aeFF",
      transaction_desc: "Testing busd on encryptbox",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;

//*=============Crypto Endpoints End =============*//

//*=============History Endpoints Begins =============*//
export const type = `{
    ||||********* TYPE 1 ***********|||||
    transaction_id: "reference96665568.f39c6ea5-2042-4540-8603-9dc14eca782d",
    hash_id:
      "0xcd268b8a3c869c7fd3bfb054efa7f83471c95ade7bde0eee06cf7731b282d464",
    source_acct: "johndoe@yahoo.com",
    destination_acct: "8935320250",
    to_id: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    gasLimit: "36127",
    gasPrice: "3000000000",
    trans_type: "credit",
    transaction_desc: "Testing busd on encryptbox",
    transaction_amount: "500.00",
    coin_quantity: 0.5036,
    created: "2023-04-20T11:06:25.000Z"

    ||||********* TYPE2 ***********|||||

    transaction_id: "reference96665568.e2c030c0-315a-4782-9205-5a52395e057c",
    source_acct: "johndoe@yahoo.com",
    destination_acct: "8935320250",
    trans_type: "transfer",
    transaction_desc: "Testing busd on encryptbox",
    transaction_amount: "50.00",
    initial_balance: "38987.00",
    current_balance: "38937.00",
    created: "2023-04-18T15:59:29.000Z"

    ||||********* TYPE 3 ***********|||||

    trans_id: "reference96665568.f39c6ea5-2042-4540-8603-9dc14eca782d",
    amount: "500.0000",
    coin_quantity: 0.5036,
    hash_id:
      "0xcd268b8a3c869c7fd3bfb054efa7f83471c95ade7bde0eee06cf7731b282d464",
    to_id: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    from_id: "0x3978936B2175EF57f05Bd5d67BEbEE9Bb641B20B",
    gasLimit: "36127",
    gasPrice: "3000000000",
    data:
      "0xa9059cbb000000000000000000000000bed65907d3ce38a36e09897ab2f709e2b9563aef00000000000000000000000000000000000000000000000006fd20c6ba9d0670",
    nonce: 42,
    created: "2023-04-20T11:06:25.000Z",
  }`;

export const gethistory = `{
    status: "202",
    message: "A Customer Transaction History",
    data: [
      {
        transaction_id: "weqw452001001.3ae93f83-2308-4604-9059-7ebc19713317",
        source_acct: "johndoe@gmail.com",
        destination_acct: "johndoe@gmail.com",
        trans_type: "credit",
        transaction_desc: "this is my first test",
        transaction_amount: "100.00",
        initial_balance: "0.00",
        current_balance: "100.00",
        created: "2023-04-06T12:55:40.000Z",
      },
    ],
  }`;
export const gethistoryEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/gethistory",
    {
      "type": "3",
     "start_date": "2023-01-22",
     "end_date": "2023-06-04"
    },
    {
      headers: {
        token: "putyourpublickeyhere",
      },
    }
  )`;
export const gethistories = `{
    status: "202",
    message: "All Cusromer Transaction History",
    data: [
      {
        transaction_id: "weqw452001001.3ae93f83-2308-4604-9059-7ebc19713317",
        source_acct: "johndoe@gmail.com",
        destination_acct: "johndoe@gmail.com",
        trans_type: "credit",
        transaction_desc: "this is my first test",
        transaction_amount: "100.00",
        initial_balance: "0.00",
        current_balance: "100.00",
        created: "2023-04-06T12:55:40.000Z",
      },
      {
        transaction_id: "weqw452001001.ed10989a-5367-4942-ac70-da08f148c1ef",
        source_acct: "johndoe@gmail.com",
        destination_acct: "johndoe@gmail.com",
        trans_type: "transfer",
        transaction_desc: "this is my first test",
        transaction_amount: "100.00",
        initial_balance: "5000.00",
        current_balance: "4900.00",
        created: "2023-04-06T12:55:40.000Z",
      },
    ],
  }`;

export const gethistoriesEp = `axios.post(
        "https://dashboard.encryptbox.co.uk/api/v1/live/gethistories",
        {
          "type":2,
          "customer_id": "90c119d8-3498-530f-add1-b4e841a2c2d8",
          "start_date":"2023-01-01",
          "end_date":"2023-12-31"
        },
        {
          headers: {
            token: "putyourpublickeyhere",
          },
        }
      )`;

//*=============History Endpoints End =============*//

//*=============Dispute Endpoints Begins =============*//
export const dispute = `{
    statuscode: "202",
    message: "Dispute sent",
  }`;
export const disputeEp = `axios.post(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getbuyrate",
    {
      dispute_file: "mjerepro.png",
      topic: "Transactional Errors",
      message:
        "I was trying to send money but the transaction was not successful",
      ticket_no: "0000",
    },
    {
      headers: {
        token: "putyourpublickeyhere",
        "Content-Type": "application/json",
      },
    }
  )`;

//*=============Dispute Endpoints End =============*//

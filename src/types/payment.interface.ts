interface Amount {
    value: string
    currency: string
}

interface Recipient {
    account_id: string
    gateway_id: string
}

interface PayMethod {
    type: string
    id: string
    saved: boolean
}

interface Confirmation {
    type: string
    return_url: string
    confirmation_url: string
}

export interface IPaymentResponse {
    id: string
    status: string
    amount: Amount
    recipient: Recipient
    payment_method: PayMethod
    created_at: Date
    confirmation: Confirmation
}
export interface IPayment {

   programToken : string;
   destinationToken : string;
   currency : string;
   clientPaymentId : string;
   amount : string;
   purpose : string;
   mensaje:string;
   errors:string;

}
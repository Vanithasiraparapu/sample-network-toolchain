/**
 * Initialize some test assets and participants useful for running a demo.
 * @param {com.miraclesoft.blockchain.setUpDemo} demo - the SetupDemo transaction
 * @transaction
 */
function setUpDemo(demo){
	console.log("\n\nIn setUpDemo fun\n\n")
var factory = getFactory();
	var NS = 'com.miraclesoft.blockchain';

	var manufacturer = factory.newResource(NS, 'Manufacturer', 'intel@gmail.com');
	manufacturer.name='Intel';
	manufacturer.balance=100000;
	var address=factory.newConcept(NS,'Address');
	address.city='Visakhapatnam';
	address.state='AndhraPradesh';
	address.country='India';
	address.pincode=123456
	manufacturer.address=address;
	manufacturer.companyid='intel_vsp'
    manufacturer.availableProduct=[]
    manufacturer.soldProductDetails=[]
    manufacturer.availableProductSerialNo=[] 

    var outlet = factory.newResource(NS, 'Outlet', 'inteloutlet1@gmail.com');
	outlet.name='intel_outlet1';
	outlet.balance=50000;
	var address=factory.newConcept(NS,'Address');
	address.city='Visakhapatnam';
	address.state='AndhraPradesh';
	address.country='India';
	address.pincode=123456
	outlet.address=address;
	outlet.outletid='intel_outlet1_vsp'
   outlet.availableProduct=[]
    outlet.soldProductDetails=[]
    outlet.availableProductSerialNo=[] 

	var retailer = factory.newResource(NS, 'Retailer', 'retailer1@gmail.com');
	retailer.name='retailer1';
	retailer.balance=50000;
	var address=factory.newConcept(NS,'Address');
	address.city='Visakhapatnam';
	address.state='AndhraPradesh';
	address.country='India';
	address.pincode=123456
	retailer.address=address;
	retailer.retailerid='retailer1_vsp';
    retailer.availableProduct=[];
    retailer.soldProductDetails=[];
    retailer.availableProductSerialNo=[] 
  
  
	
	var customer = factory.newResource(NS, 'Customer', 'customer1@gmail.com');
	customer.name='customer1';
	customer.balance=50000;
	var address=factory.newConcept(NS,'Address');
	address.city='Visakhapatnam';
	address.state='AndhraPradesh';
	address.country='India';
	address.pincode=123456;
	customer.address=address;
	customer.customerid='vanitha';
    customer.availableProduct=[];
    customer.soldProductDetails=[];
    customer.availableProductSerialNo=[] 
	/*var cusDate = new Date();
	var Date = cusDate.getFullYear()+"-"+cusDate.getMonth()+"-"+cusDate.getDay();
	customer.getproductDate=Date;*/
	
	var order = factory.newResource(NS, 'Order', 'ORD_001');
	console.log('order data will be'+setUpDemo.timestamp);
	order.orderDate=demo.timestamp;
	order.orderPerson='customer1';
	order.ordererType='CUSTOMER';
	order.orderStatus='CREATED';
order.orderProviderName='intel@gmail.com';
	var productQualities=factory.newConcept(NS,'ProductQualities');
	productQualities.productType='HDD';
	productQualities.productModel='Expansion';
	productQualities.productConfiguration='i3x5gen';
	order.productQualities=productQualities;
	order.orderQuantity=1;
	order.saleItemSerial=["1_1"];
	
	var product = factory.newResource(NS, 'Product', 'PROD_001');
	product.productQualities=productQualities;
	product.availableQuantity=45;
product.productPrice=6000;
	product.warrantyPeriod=3;
	product.productDescription='Intel 5 th generation processor with 2 cores';
	product.productManufacturer='Intel';
	product.productStatus='MANUFACTURED';
	product.productOwner='intel@gmail.com';
 product.productSerialNo= ["1"];
	product.manufactureDate=demo.timestamp;
  product.soldProductDetails=[];
	var custDate= new Date();
//var Date = new Date();
// Date.setFullYear(custDate.getFullYear());
//Date.setMonth(custDate.getMonth());
	//var Date = custDate.getFullYear()+"-"+custDate.getMonth()+"-"+custDate.getDay();
//   product.getproductDate=custDate.toString();
	
	return getParticipantRegistry(NS + '.Manufacturer')
		.then(function (manufacturerRegistry) {
		return manufacturerRegistry.addAll([manufacturer]);
	}).then (function(){
		return getParticipantRegistry(NS + '.Outlet');
	}).then(function (outletRegistry) {
		return outletRegistry.addAll([outlet]);
	}).then (function(){
		return getParticipantRegistry(NS + '.Customer');
	}).then(function (customerRegistry) {
		return customerRegistry.addAll([customer]);
	}).then (function(){
		return getParticipantRegistry(NS + '.Retailer');
	}).then(function (retailerRegistry) {
		return retailerRegistry.addAll([retailer]);
	}).then (function(){
		return getAssetRegistry(NS + '.Order');
	}).then(function (orderRegistry) {
		return orderRegistry.addAll([order]);
	}).then (function(){
		return getAssetRegistry(NS + '.Product');
	}).then(function (productRegistry) {
		return productRegistry.addAll([product]);
	});
}

/**
* Initialize some test assets and participants useful for running a demo.
* @param {com.miraclesoft.blockchain.createProduct} createProduct - the PlaceOrder transaction
* @transaction
*/
function createProductFunc(createProduct){
console.log("\n\nIn createProductFunc fun\n\n")
var factory = getFactory();
var NS = 'com.miraclesoft.blockchain';
var product = factory.newResource(NS, 'Product', createProduct.product.productId );
var productQualities=factory.newConcept(NS,'ProductQualities');
productQualities.productType=createProduct.product.productQualities.productType;
productQualities.productModel=createProduct.product.productQualities.productModel;
productQualities.productConfiguration=createProduct.product.productQualities.productConfiguration;
//productQualities.productPrice=createProduct.product.productPrice;
product.productPrice=createProduct.product.productPrice;
product.warrantyPeriod=createProduct.product.warrantyPeriod;
product.productDescription=createProduct.product.productDescription;
// product.transactionIds = ["Transaction Id for createProduct" + " " +createProduct.transactionId];
//product.orderIds = ["Id for Product" + " " +createProduct.product.productId];
//product.orderPersons = ["Product Manufacturer" + " " +createProduct.product.productManufacturer];
//product.totalManufacturedQuantity = createProduct.product.totalManufacturedQuantity 
product.availableQuantity=createProduct.product.availableQuantity;
 product.totalManufacturedQuantity = product.availableQuantity  
  product.soldProductDetails= createProduct.product.soldProductDetails;
var Ids = product.productId;
product.productId= createProduct.product.productId;
var productSerialNo = [];
var serialNo = 0;
for (var i=0; i< product.availableQuantity; i++ ){
	serialNo = serialNo +1 ;
	console.log(serialNo);
	var pSNo = Ids + "_" + serialNo ;
	console.log(pSNo);
	 productSerialNo.push(pSNo);    
}
 product.productSerialNo = productSerialNo;
console.log("printing product serial no" + " " + product.productSerialNo); 
product.productManufacturer=createProduct.product.productManufacturer;
product.productStatus='MANUFACTURED';
// product.getproductDate=createProduct.product.getproductDate;
product.manufactureDate=createProduct.timestamp;
product.productQualities=productQualities;
product.productOwner=createProduct.product.productOwner;
console.log(createProduct.product.productManufacturer);
return getAssetRegistry(NS + '.Product')
.then(function (productRegistry) {
		return productRegistry.addAll([product]);
})
.then(
	function(){
	return query('validateManufacturer',{manufacturerEmail:createProduct.product.productManufacturer});
	}
).then(function(result)
{
		if(result.length !=1)
				{
					throw new Error('Invalid Manufacturer');
				}
		else
			{ 
				console.log('valid manufacturer');
			}
}).then(
function()
{
	return query('validateProduct',{productID:createProduct.product.productId});
}
).then(function(result)
{
		if(result.length == 0)
				{
					console.log('Valid Product ID');
				 // return product;
				}
		else
			{ 
				throw new Error('Product ID already exists');
			}
	// return product;
})
}

/*
/**
* Initialize some test assets and participants useful for running a demo.
* @param {com.miraclesoft.blockchain.claim} claim- the PlaceOrder transaction
* @transaction
*/
/*
function warrantyClaims(claim){
var factory = getFactory();
var NS ="com.miraclesoft.blockchain";

//  fetch the order ids from product table and look for the customer for that particular order from the order table and then check for the product if that is owned by the customer or not , if yes check the warranty claim dates.
//  var order = factory.newResource(NS, 'Order', claim.order.orderId);
var claim = factory.newresource(NS, 'Order', claim.order.orderId);
// var fetchProduct = factory.newresource(NS, 'Product', claim.product.productId);
claim.warrantyperiod=claim.product.warrantyPeriod;
console.log(claim.warrantyperiod);
claim.getproductdate=claim.order.getOrderDate;
 console.log(claim.getproductdate);
claim.warrantyDate = new Date(claim.getproductdate);
console.log("hello" +claim.warrantyDate);
claim.warrantyDate.setFullYear(claim.warrantyDate.getFullYear()+claim.warrantyperiod)
console.log(claim.warrantyDate.getFullYear())
claim.currentDate =new Date();
 console.log('current date'+claim.currentDate);
console.log(claim.currentDate.getMonth()+'Month'+claim.warrantyDate.getMonth());
console.log(claim.currentDate.getDate()+'Date'+claim.warrantyDate.getDate());
console.log(claim.currentDate.getFullYear()+'Year'+claim.warrantyDate.getFullYear())

//check if the claimed product exists and is owned by the owner as entered else throw an error 
//psuedocode
//  if (product.productid exists for customer )
//compare the claim date with the order date

//
if(claim.currentDate <= claim.warrantyDate)
{
 console.log('with in warranty'); 
	//var warrentyStatus=(NS, 'warrentyStatus');
	console.log(claim.defect);
	if(claim.defect==true)
{
	console.log('your product will be replaced soon');
}
	else{
		console.log('your product will be repaired soon');
	}
}
else
{
 console.log('product is out of warrenty'); 
}       
	

}
*/
/**
* Initialize some test assets and participants useful for running a demo.
* @param {com.miraclesoft.blockchain.orderProduct} orderProduct - the PlaceOrder transaction
* @transaction
*/
function orderProductFunc(orderProduct){
 console.log("In orderProductFunc fun")
var factory = getFactory();            
var NS = 'com.miraclesoft.blockchain';
var order = factory.newResource(NS, 'Order', orderProduct.order.orderId);
//var soldProductDetails=factory.newConcept(NS,'soldProductDetails');
console.log(orderProduct.order.orderId);
order.orderDate=orderProduct.order.orderDate;
order.orderPerson=orderProduct.order.orderPerson;
order.ordererType=orderProduct.order.ordererType;
order.orderStatus=orderProduct.order.orderStatus;
order.saleItemSerial = orderProduct.order.saleItemSerial;
var productQualities=factory.newConcept(NS,'ProductQualities');
productQualities.productType=orderProduct.order.productQualities.productType;
productQualities.productModel=orderProduct.order.productQualities.productModel;
productQualities.productConfiguration=orderProduct.order.productQualities.productConfiguration;
order.productQualities=productQualities;
order.orderQuantity=orderProduct.order.orderQuantity;
order.orderProviderName=orderProduct.order.orderProviderName;
var currentAvailability;
var saleProductSerialNo;
console.log('this is just to test the storage function');
console.log('order.orderProviderName'+order.orderProviderName);
var status='';
var orderedProductPrice=0.0;

 if(order.orderQuantity < 1 )
{
	throw new Error('Please enter a valid Quantity details');
}

if(orderProduct.order.ordererType != 'OUTLET' && orderProduct.order.ordererType != 'RETAILER' && orderProduct.order.ordererType != 'CUSTOMER')
{
	throw new Error('Please enter a valid Orderer Type');
}
console.log('completed basic validation');
return getAssetRegistry(NS + '.Order')
.then(function (orderRegistry) {
		return orderRegistry.addAll([order]);
}).then(
	function()
	{
		if(orderProduct.order.ordererType == 'OUTLET')
		{
			status='MANUFACTURED';
			return query('validateOutlet',{outletEmail:orderProduct.order.orderPerson});
		}
		else if(orderProduct.order.ordererType == 'RETAILER')
		{
			status='IN_OUTLET';
			return query('validateRetailer',{retailerEmail:orderProduct.order.orderPerson});
		}
		else
		{
			status='WITH_RETAILER';
			return query('validateCustomer',{customerEmail:orderProduct.order.orderPerson});
		}
	}).then(
		function(ordererObject)
		{
			if(ordererObject.length !=1)
			{
				throw new Error('Invalid Orderer Please place order with valid orderer details');
			}
			else
			{
				console.log('Valid Orderer');
								
			}
		}
	).then (function(){
		return getAssetRegistry(NS + '.Product');
	}).then(function (productRegistry) {
	console.log('checkOrderAvailability',{productType:orderProduct.order.productQualities.productType,quantity:order.orderQuantity,providerName:order.orderProviderName})
	return query('checkOrderAvailability',{productType:orderProduct.order.productQualities.productType,quantity:order.orderQuantity,providerName:order.orderProviderName})
	.then(function(productObject)
	{    
				console.log(productObject[0].productSerialNo);
		console.log("length" + " " + productObject.length);
				console.log("product quant from Product" + " " + productObject[0].availableQuantity);
					if(orderProduct.order.orderQuantity > productObject[0].availableQuantity)   
		{
			throw new Error('Requested Quantity Unavailable');
		}
		
		else
		{
			orderedProductPrice=productObject[0].productPrice;
			console.log('orderedProductPrice'+orderedProductPrice);
			console.log(productObject[0].availableQuantity + " " + "hi");
			productObject[0].availableQuantity = productObject[0].availableQuantity - order.orderQuantity;
			var placedOrder = order.orderQuantity;
			console.log("updated quantity")
			console.log(productObject[0].availableQuantity);
			saleProductSerialNo= productObject[0].productSerialNo.slice(0,order.orderQuantity);
			console.log("------------------------------------------------------")
			console.log(saleProductSerialNo)
			productObject[0].productSerialNo = productObject[0].productSerialNo.slice(order.orderQuantity);
			console.log("--------------------------------------------------------")
			console.log(productObject[0].productSerialNo)
          				/* soldProductDetails.transactionID = orderProduct.transactionId;
          				soldProductDetails.manufacturer =productObject[0].productManufacturer
                        soldProductDetails.productSerialNo= saleProductSerialNo */
						//var soldProductDetails = []
                 /*       soldProductDetails.transactionID = orderProduct.transactionId
          				soldProductDetails.manufacturer= productObject[0].productManufacturer
          				soldProductDetails.owner = order.orderPerson
          				soldProductDetails.productSerialNo= saleProductSerialNo */
                     
        
				/*		console.log("testing----------------------------------")
          				console.log("transactionID")
          				console.log(orderProduct.transactionId);
          				console.log("manufacturer");
          				console.log(productObject[0].productManufacturer);
          				console.log("owner");
          				console.log(order.orderPerson)
          				console.log("productSerialNo")
          				console.log(saleProductSerialNo);
          				console.log("--------------")
          				console.log(soldProductDetails) */

        //  productObject[0].soldProductDetails=[]
          console.log(productObject[0]);
          
			 
	      orderProduct.order.saleItemSerial =saleProductSerialNo;
          console.log(orderProduct.order.saleItemSerial);
		  console.log("saleItemSerial")
		  console.log(order.saleItemSerial )
          order.saleItemSerial = orderProduct.order.saleItemSerial 
		
          //order.updateAll(order.saleItemserial)
    /*      var soldProductDetails =[]
			soldProductDetails = "{transactionID : "+orderProduct.transactionId +"}, "+"{orderID :"+order.orderId +"}, "+"{manufacturer : "+productObject[0].productManufacturer +"}, "+ "{owner : "+order.orderPerson +"}, "+ "{ productSerialNo :"+saleProductSerialNo+"}"
            "productType": "1",
    "productModel": "1"*/
          
          console.log("product object")
          console.log(productObject)
          console.log ("printing product quality objects")
          console.log(productObject[0].productQualities.productType)
          console.log(productObject[0].productQualities.productModel)
          
           var soldProduct= {'transactionID':(orderProduct.transactionId),        
							'manufacturer':(productObject[0].productManufacturer),
						    'owner':(order.orderPerson),
                             'productType':productObject[0].productQualities.productType,
                             'productModel':productObject[0].productQualities.productModel,
                             'productId':productObject[0].productId,
							'productSerialNo':(saleProductSerialNo)}
          				var obj = { "name":"John", "age":30, "city":"New York"};
                       var soldProductDetails = JSON.stringify(soldProduct);
                       //  soldProductDetails = JSON.parse(soldProductDetails);
                       console.log(soldProductDetails)
			//console.log(soldProductDetails)
           productObject[0].soldProductDetails.push(soldProductDetails);
           console.log("printing sold product details")
			console.log(productObject[0].soldProductDetails);																		 
			console.log("printing the updated serial numbers");
					productRegistry.updateAll(productObject)	
			
		for (var n = 0; n < productObject.length; n++) {
							
			//	var availableProduct= [];	
				if(orderProduct.order.ordererType=='OUTLET')
				{   
					productObject[n].productStatus='IN_OUTLET';

					//productObject[n].productOwner=order.orderPerson;
				}	
				else if(orderProduct.order.ordererType=='RETAILER')
				{
                    console.log("I am retailer")
                   
					productObject[n].productStatus='WITH_RETAILER';
                    //availableProduct.push(soldProductDetails);
				//	productObject[n].productOwner=order.orderPerson;
					productObject[n].productPrice=(productObject[n].productPrice)+
																					(productObject[n].productPrice*0.10);
                  
                  return query('validateRetailer',{retailerEmail:order.orderPerson}).then(function (retailerObject)
          {    
              console.log("update my available quantity")
              console.log(retailerObject);
              console.log("soldProductDetails");
              console.log(soldProductDetails);
     
            soldProductDetails= JSON.parse(soldProductDetails)

            var finalKeys=[];
              console.log(retailerObject[0].availableProductSerialNo.length)
              console.log(retailerObject[0].availableProductSerialNo)
                //    var obj;
              for(var i=0; i<retailerObject[0].availableProductSerialNo.length;i++){
                      console.log(i)
                      //console.log(retailerObject[0].availableProductSerialNo)
                      var val =JSON.parse(retailerObject[0].availableProductSerialNo[i])
                      //    console.log(typeof(val))
                      console.log(val);
                      var keys = Object.keys(val)
                
                      finalKeys.push(keys[0])
           
               }
               
                console.log("----------------------")
                console.log(finalKeys);
                console.log(finalKeys.includes(soldProductDetails.productId))
                if(finalKeys.includes(soldProductDetails.productId)){
            
                      var index = finalKeys.indexOf(soldProductDetails.productId);
                      console.log(soldProductDetails.productSerialNo)
                      console.log(retailerObject[0].availableProductSerialNo[index])
                      var obj;
                      //for(var i=0; i< soldProductDetails.productSerialNo.length; i++ ){
                              console.log("soldProductDetails.productSerialNo[i]")
                             // console.log(soldProductDetails.productSerialNo[i])
                              var target =JSON.parse( retailerObject[0].availableProductSerialNo[index])
                              var values = Object.values(target)
                              console.log(values[0])
                        
                        var x =retailerObject[0].availableProductSerialNo[index]
                                console.log(JSON.parse(x))
                        console.log("JSON.parse(x)[soldProductDetails.productId]")
                                console.log(JSON.parse(x)[soldProductDetails.productId])
                             var y = JSON.parse(x)[soldProductDetails.productId].concat(soldProductDetails.productSerialNo)
                              // console.log(Object.values(JSON.parse(x))[0])
                            //    var y = Object.values(JSON.parse(x))[0]
                        		
                        	//y.push(soldProductDetails.productSerialNo)
                             console.log("print y")
                           console.log(y)
 //  JSON.parse(retailerObject[0].availableProductSerialNo[index])[soldProductDetails.productId].concat(soldProductDetails.productSerialNo)
                 // retailerObject[0].availableProductSerialNo[index][soldProductDetails.productId]=
                        
                        var newTempObj= JSON.parse(retailerObject[0].availableProductSerialNo[index]);
                        newTempObj[soldProductDetails.productId] = y
                        
                        console.log("printing object")
                        console.log(newTempObj)
                        retailerObject[0].availableProductSerialNo[index] = JSON.stringify(newTempObj);
                        
                        console.log(retailerObject[0].availableProductSerialNo[index])
                           
                     console.log("retailerObject")
                  
                     console.log(retailerObject[0])
                   }
                
                
                else{
                   console.log(soldProductDetails.productId)
                   console.log(typeof(soldProductDetails))
                   console.log(soldProductDetails)
                   var serials= {};
                   serials[soldProductDetails.productId] =  soldProductDetails.productSerialNo
                   var serialNo =JSON.stringify(serials)
                   retailerObject[0].availableProductSerialNo.push(serialNo);  
                   console.log("else")
                   console.log("serials")
                   console.log(serials)
                   console.log( retailerObject[0].availableProductSerialNo)   
                } 
          
			   soldProductDetails= JSON.stringify(soldProductDetails);
               retailerObject[0].availableProduct.push(soldProductDetails);                  
               console.log("retailer object")
               console.log(retailerObject[0])
               console.log(retailerObject[0].availableProduct)
			   return getParticipantRegistry(NS + '.Retailer').then
				      (function (retailerRegistry) {
		                return retailerRegistry.updateAll(retailerObject);
	                  
    
               })
				})
			}	
				else
				{
                    console.log("I am the customer")
					productObject[n].productStatus='WITH_CUSTOMER';
                    productObject[n].productPrice=(productObject[n].productPrice)+																(productObject[n].productPrice*0.10);
                    
                   return query('validateCustomer',   {customerEmail:order.orderPerson}).then(function (customerObject)
               {    console.log("update my available quantity")
                    console.log(customerObject);
                   // retailerObject.availableProduct = []
                    console.log("soldProductDetails");
                     console.log(soldProductDetails);
                     customerObject[0].availableProduct.push(soldProductDetails);
                     console.log(customerObject[0].availableProduct)
					 return getParticipantRegistry(NS + '.Customer').then
					 (function (customerRegistry) {
		                return customerRegistry.updateAll(customerObject);

               })
				})
					//productObject[n].productOwner=order.orderPerson;
				}	
			}
		
		return productRegistry.updateAll(productObject)   
		.then (function(){
					if(orderProduct.order.ordererType=='OUTLET')
					{
						console.log('Product moved to outlet successfully');
					}
					else if(orderProduct.order.ordererType=='RETAILER')
					{	
						return query('validateRetailer',{retailerEmail:order.orderPerson})
						.then
						(
							function(retailerObject)
							{
								console.log('query executed successfully');
								console.log('orderedProductPrice'+orderedProductPrice+'order.orderQuantity'+order.orderQuantity);
								var amountToPay=order.orderQuantity * orderedProductPrice;
								console.log('Amount needed to pay'+amountToPay);
								for(var n=0;n<retailerObject.length;n++)
								{
									if(retailerObject[n].balance < amountToPay)
									{
										throw new Error('Insufficient fund for requested order');
									}
									else
									{
										retailerObject[n].balance-=amountToPay;
									}
									console.log('retailerObject[n].balance' 
																									+retailerObject[n].balance);
								}
								return getParticipantRegistry(NS + '.Retailer')
								.then
								(
									function(retailerRegistry)
									{
										return retailerRegistry.updateAll(retailerObject);
									}
								)
							}
						)
						.then
						(
							function()
							{
								return query('validateOutlet',{outletEmail 
																																 :order.orderProviderName});
							}
						)
						.then
						(
							function(manufacturerObject)
							{
								console.log('query executed successfully');
								console.log('orderedProductPrice'+orderedProductPrice+'order.orderQuantity'+order.orderQuantity);
								var amountToPay=order.orderQuantity * orderedProductPrice;
								console.log('Amount needed to pay'+amountToPay);
								for(var n=0;n<manufacturerObject.length;n++)
								{
									manufacturerObject[n].balance+=amountToPay;
								}
								return getParticipantRegistry(NS + '.Outlet')
								.then
								(
									function(manufacturerRegistry)
									{
										return manufacturerRegistry.updateAll(manufacturerObject);
									}
								)
							}
						)
					}
					else
					{	
						return query('validateCustomer',({customerEmail:order.orderPerson}))
						.then
						(
							function(customerObject)
							{
								console.log('query executed successfully');
								console.log('orderedProductPrice'+orderedProductPrice+'order.orderQuantity'+order.orderQuantity);
								var amountToPay=order.orderQuantity * orderedProductPrice;
								console.log('Amount needed to pay'+amountToPay);
								for(var n=0;n<customerObject.length;n++)
								{
									if(customerObject[n].balance < amountToPay)
									{
										throw new Error('Insufficient fund for requested order');
									}
									else
									{
										customerObject[n].balance-=amountToPay;
									}
								}
								return getParticipantRegistry(NS + '.Customer')
								.then
								(
									function(customerRegistry)
									{
										return customerRegistry.updateAll(customerObject);
									}
								)
							}
						)
						.then
						(
							function()
							{
								return query('validateRetailer',{retailerEmail:order.orderProviderName});
							}
						)
						.then
						(
							function(retailerObject)
							{
								console.log('query executed successfully');
								console.log('orderedProductPrice'+orderedProductPrice+'order.orderQuantity'+order.orderQuantity);
								var amountToPay=order.orderQuantity * orderedProductPrice;
								console.log('Amount needed to pay'+amountToPay);
								for(n=0;n<retailerObject.length;n++)
								{
									retailerObject[n].balance+=amountToPay;
								}
								return getParticipantRegistry(NS + '.Retailer')
								.then
								(
									function(retailerRegistry)
									{
										return retailerRegistry.updateAll(retailerObject);
									}
								)
							}
						)
					}
				}
			)
		}
	})
	});
}





/**
* Initialize some test assets and participants useful for running a demo.
* @param {com.miraclesoft.blockchain.orderProductFromRetailer} orderProductFromRetailer - the PlaceOrder transaction for a an enduser from a retailer
* @transaction
*/

function orderProductEndUser(orderProductFromRetailer){

    console.log("In orderProductEndUser function")
    
/* we need to fetch the availble quantity from the retailer json object , update the serial numbers in 
availableProductSerialNo, update the sold products array similar to the sold products array in the 
Product Json of the manufacturer, thereafter update the available products array in the customer json

*/

   var factory = getFactory();            
   var NS = 'com.miraclesoft.blockchain';
   var order = factory.newResource(NS, 'Order', orderProductFromRetailer.order.orderId);
   console.log(orderProductFromRetailer.order.orderId);
   
   // Placing an order inputs would be order.orderPerson,productQualities.productType,productQualities.productModel,
   // productQualities.productModel, order.orderQuantity, order.orderProviderName
   order.orderDate=orderProductFromRetailer.order.orderDate;
   order.orderPerson=orderProductFromRetailer.order.orderPerson;
   order.ordererType=orderProductFromRetailer.order.ordererType;
   order.orderStatus=orderProductFromRetailer.order.orderStatus;
   order.saleItemSerial = orderProductFromRetailer.order.saleItemSerial;
   var productQualities=factory.newConcept(NS,'ProductQualities');
   productQualities.productType=orderProductFromRetailer.order.productQualities.productType;
   productQualities.productModel=orderProductFromRetailer.order.productQualities.productModel;

   productQualities.productConfiguration=orderProductFromRetailer.order.productQualities.productConfiguration;
   order.productQualities=productQualities;
   order.orderQuantity=orderProductFromRetailer.order.orderQuantity;
   order.orderProviderName=orderProductFromRetailer.order.orderProviderName;
   //var currentAvailability;
   var soldProductsSerialNo;
   console.log('this is just to test the storage function');
   console.log('order.orderProviderName'+order.orderProviderName);
   var status='';
   var orderedProductPrice=0.0;
   
    if(order.orderQuantity < 1 )
   {
       throw new Error('Please enter a valid Quantity details');
   }
   
   if(orderProductFromRetailer.order.ordererType != 'OUTLET' && orderProductFromRetailer.order.ordererType != 'CUSTOMER')
   {
       throw new Error('Please enter a valid Orderer Type');
   }
   console.log('completed basic validation');
   return getAssetRegistry(NS + '.Order')
   .then(function (orderRegistry) {
           return orderRegistry.addAll([order]);
   }).then(
       function()
       {
           if(orderProductFromRetailer.order.ordererType == 'OUTLET')
           {
               status='WITH_RETAILER';
               return query('validateOutlet',{outletEmail:orderProductFromRetailer.order.orderPerson});
           }
           else
           {
               status='WITH_RETAILER';
               return query('validateCustomer',{customerEmail:orderProductFromRetailer.order.orderPerson});
           }
       }).then(
           function(ordererObject)
           {
               if(ordererObject.length !=1)
               {
                   throw new Error('Invalid Orderer Please place order with valid orderer details');
               }
               else
               {
                   console.log('Valid Orderer');
                                   
               }
           }
       ).then (function(){

           //fetch retailer object
           return getParticipantRegistry(NS + '.Retailer');
       }).then(function (retailerRegistry) {

 // check the product type and product model in the retailer

       console.log('validateRetailer',{retailerEmail:order.orderProviderName})
       return query('validateRetailer',{retailerEmail:order.orderProviderName})
       .then(function(retailerObject)
       {    
                   console.log("display retailer object")
                   console.log(retailerObject[0]);
                   console.log("display retailer available product")
                   console.log(retailerObject[0].availableProduct);
                   console.log("display retailer available product serialNo")
                   console.log(retailerObject[0].availableProductSerialNo);
                   var productId;
                   var manufacturer;
                   var retailer;
                   var owner;
                   var productType;
                   var productModel;
                   var updatedProductsSerials;
                   var soldProductsSerials;
                   var soldProductDetails;
                   var flag = false;
               // check the producttype and productmodel if its available or not
               for(var i=0; i< retailerObject[0].availableProduct.length && flag==false; i++){

                   console.log("display the retailerObject[0].availableProduct[i]");
                   console.log(retailerObject[0].availableProduct[i]);
                   var tempObj =JSON.parse(retailerObject[0].availableProduct[i])
                    console.log("display tempObj") 
                   console.log(tempObj)
                  console.log("productQualities.productType")
                 console.log(productQualities.productType)
                 console.log("(tempObj)[productQualities.productType]")
                 console.log(tempObj.productType)
                 console.log("tempObj.productModel")
                 console.log(tempObj.productModel)
                  console.log("productModel")
                 console.log(productQualities.productModel)
                 console.log("JSON.parse( retailerObject[0].availableProductSerialNo[i][tempObj.productId]).length")
                    console.log(JSON.parse( retailerObject[0].availableProductSerialNo[i])[tempObj.productId].length)
                 console.log("JSON.parse( retailerObject[0].availableProductSerialNo[i])[tempObj.productId].length >= order.orderQuantity");
                console.log( JSON.parse( retailerObject[0].availableProductSerialNo[i])[tempObj.productId].length >= order.orderQuantity)
    
                   if(productQualities.productType==tempObj.productType
                   && productQualities.productModel== tempObj.productModel
                   &&JSON.parse( retailerObject[0].availableProductSerialNo[i])[tempObj.productId].length >= order.orderQuantity) {
                     console.log("Inside if")
                     
                     console.log(typeof(retailerObject[0].availableProductSerialNo[i]))
                     console.log(retailerObject[0].availableProductSerialNo[i])
                      var tempAvailableSerials= JSON.parse( retailerObject[0].availableProductSerialNo[i] )  
                      //    var index = indexof(tempAvailableSerials)
                          console.log("tempObj[productId]")
                          console.log(tempObj.productId)
                          productId = tempObj.productId
                     console.log("tempAvailableSerials")
                     console.log(tempAvailableSerials)
                     console.log("tempAvailableSerials[productId]")
                     console.log(tempAvailableSerials[productId])
              //      if(tempAvailableSerials[productId].length >= order.orderQuantity){
                    //  console.log("Inside check loop")
                      console.log(tempAvailableSerials[productId].length >= order.orderQuantity)
                          productType=tempObj.productType;
                          productModel=tempObj.productModel;
                          manufacturer=tempObj.manufacturer;
                          retailer=tempObj.owner;
                          owner=order.ordererType
                        //  retailerObject[0].availableProduct[i].owner=  owner;
                     //     retailerObject[0].retailer=  retailer;
                         // updating the current available products in the retailer object
                     var updatedProductsSerials;
                      soldProductsSerials = tempAvailableSerials[productId].slice(0,order.orderQuantity)
                    
                         tempAvailableSerials[productId]= tempAvailableSerials[productId].slice(order.orderQuantity);
                      console.log("tempAvailableSerials after slicing")
                      console.log(tempAvailableSerials)
                      console.log("retailerObject[0].availableProductSerialNo[i][productId]")
                      console.log(retailerObject[0].availableProductSerialNo[i][productId])
                     
                     /* var newTempObj= JSON.parse(retailerObject[0].availableProductSerialNo[index]);
                        newTempObj[soldProductDetails.productId] = y
                        
                        console.log("printing object")
                        console.log(newTempObj)
                        retailerObject[0].availableProductSerialNo[index] = JSON.stringify(newTempObj);*/
                          retailerObject[0].availableProductSerialNo[i] = JSON.stringify(tempAvailableSerials);
                        
                        //updating soldProduct serial numbers and pushing it to the retailer object with other details
                        
                        
                    //  soldProductsSerials= 
                          var soldProduct= {'transactionID':(orderProductFromRetailer.transactionId),        
                           'manufacturer':(manufacturer),
                           'retailer':retailer,
                           'owner':owner,
                            'productType':productType,
                            'productModel':productModel,
                            'productId':productId,
                           'productSerialNo':soldProductsSerials}
                          soldProductDetails=JSON.stringify(soldProduct)

                          retailerObject[0].soldProductDetails.push(soldProductDetails);
                          console.log("printing retailer object after pushing soldProductDetails")
                          console.log(retailerObject[0])
              
                       
             //       }
                     flag= true;
            console.log("retailerRegistry")
           console.log(retailerRegistry)
         console.log("retailerObject")
           console.log(retailerObject)
           return retailerRegistry.updateAll(retailerObject);
                         
                   }
                  else{

                   throw new Error('Requested Quantity Unavailable');
                  }
              
               }
           
           
       /*	else
           {
               orderedProductPrice=productObject[0].productPrice;
               console.log('orderedProductPrice'+orderedProductPrice);
               console.log(productObject[0].availableQuantity + " " + "hi");
               productObject[0].availableQuantity = productObject[0].availableQuantity - order.orderQuantity;
               var placedOrder = order.orderQuantity;
               console.log("updated quantity")
               console.log(productObject[0].availableQuantity);
               soldProductsSerialNo= productObject[0].productSerialNo.slice(0,order.orderQuantity);
               console.log("------------------------------------------------------")
               console.log(soldProductsSerialNo)
               productObject[0].productSerialNo = productObject[0].productSerialNo.slice(order.orderQuantity);
               console.log("--------------------------------------------------------")
               console.log(productObject[0].productSerialNo)
                   
             console.log(productObject[0]);
             
                
             orderProductFromRetailer.order.saleItemSerial =soldProductsSerialNo;
             console.log(orderProductFromRetailer.order.saleItemSerial);
             console.log("saleItemSerial")
             console.log(order.saleItemSerial )
             order.saleItemSerial = orderProductFromRetailer.order.saleItemSerial 
           
             //order.updateAll(order.saleItemserial)
             var soldProductDetails =[]
               soldProductDetails = "{transactionID : "+orderProductFromRetailer.transactionId +"}, "+"{orderID :"+order.orderId +"}, "+"{manufacturer : "+productObject[0].productManufacturer +"}, "+ "{owner : "+order.orderPerson +"}, "+ "{ productSerialNo :"+soldProductsSerialNo+"}"		
               console.log(soldProductDetails)
              productObject[0].soldProductDetails.push(soldProductDetails);
              console.log("printing sold product details")
               console.log(productObject[0].soldProductDetails);																		 
               console.log("printing the updated serial numbers");
                       productRegistry.updateAll(productObject)	
               
           for (var n = 0; n < productObject.length; n++) {
                               
               //	var availableProduct= [];	
                   if(orderProductFromRetailer.order.ordererType=='OUTLET')
                   {   
                       productObject[n].productStatus='IN_OUTLET';
   
                       //productObject[n].productOwner=order.orderPerson;
                   }	
                   else if(orderProductFromRetailer.order.ordererType=='RETAILER')
                   {
                       console.log("I am retailer")
                      
                       productObject[n].productStatus='WITH_RETAILER';
                       //availableProduct.push(soldProductDetails);
                   //	productObject[n].productOwner=order.orderPerson;
                       productObject[n].productPrice=(productObject[n].productPrice)+
                                                                                       (productObject[n].productPrice*0.10);
                     
                     return query('validateRetailer',{retailerEmail:order.orderPerson}).then(function (retailerObject)
                  {    console.log("update my available quantity")
                       console.log(retailerObject);
                      // retailerObject.availableProduct = []
                       console.log("soldProductDetails");
                        console.log(soldProductDetails);
                        retailerObject[0].availableProduct.push(soldProductDetails);
                        console.log(retailerObject[0].availableProduct)
                        return getParticipantRegistry(NS + '.Retailer').then
                        (function (retailerRegistry) {
                           return retailerRegistry.updateAll(retailerObject);
                         
       
                  })
                   })
               }	
                   else
                   {
                       console.log("I am the customer")
                       productObject[n].productStatus='WITH_CUSTOMER';
                       productObject[n].productPrice=(productObject[n].productPrice)+																(productObject[n].productPrice*0.10);
                       
                      return query('validateCustomer',   {customerEmail:order.orderPerson}).then(function (customerObject)
                  {    console.log("update my available quantity")
                       console.log(customerObject);
                      // retailerObject.availableProduct = []
                       console.log("soldProductDetails");
                        console.log(soldProductDetails);
                        customerObject[0].availableProduct.push(soldProductDetails);
                        console.log(customerObject[0].availableProduct)
                        return getParticipantRegistry(NS + '.Customer').then
                        (function (customerRegistry) {
                           return customerRegistry.updateAll(customerObject);
                         
       
                  })
                   })
                       //productObject[n].productOwner=order.orderPerson;
                   }	
               }
           
           return productRegistry.updateAll(productObject)   
           .then (function(){
                       if(orderProductFromRetailer.order.ordererType=='OUTLET')
                       {
                           console.log('Product moved to outlet successfully');
                       }
                       else if(orderProductFromRetailer.order.ordererType=='RETAILER')
                       {	
                           return query('validateRetailer',{retailerEmail:order.orderPerson})
                           .then
                           (
                               function(retailerObject)
                               {
                                   console.log('query executed successfully');
                                   console.log('orderedProductPrice'+orderedProductPrice+'order.orderQuantity'+order.orderQuantity);
                                   var amountToPay=order.orderQuantity * orderedProductPrice;
                                   console.log('Amount needed to pay'+amountToPay);
                                   for(var n=0;n<retailerObject.length;n++)
                                   {
                                       if(retailerObject[n].balance < amountToPay)
                                       {
                                           throw new Error('Insufficient fund for requested order');
                                       }
                                       else
                                       {
                                           retailerObject[n].balance-=amountToPay;
                                       }
                                       console.log('retailerObject[n].balance' 
                                                                                                       +retailerObject[n].balance);
                                   }
                                   return getParticipantRegistry(NS + '.Retailer')
                                   .then
                                   (
                                       function(retailerRegistry)
                                       {
                                           return retailerRegistry.updateAll(retailerObject);
                                       }
                                   )
                               }
                           )
                           .then
                           (
                               function()
                               {
                                   return query('validateOutlet',{outletEmail 
                                                                                                                                    :order.orderProviderName});
                               }
                           )
                           .then
                           (
                               function(manufacturerObject)
                               {
                                   console.log('query executed successfully');
                                   console.log('orderedProductPrice'+orderedProductPrice+'order.orderQuantity'+order.orderQuantity);
                                   var amountToPay=order.orderQuantity * orderedProductPrice;
                                   console.log('Amount needed to pay'+amountToPay);
                                   for(var n=0;n<manufacturerObject.length;n++)
                                   {
                                       manufacturerObject[n].balance+=amountToPay;
                                   }
                                   return getParticipantRegistry(NS + '.Outlet')
                                   .then
                                   (
                                       function(manufacturerRegistry)
                                       {
                                           return manufacturerRegistry.updateAll(manufacturerObject);
                                       }
                                   )
                               }
                           )
                       }
                       else
                       {	
                           return query('validateCustomer',({customerEmail:order.orderPerson}))
                           .then
                           (
                               function(customerObject)
                               {
                                   console.log('query executed successfully');
                                   console.log('orderedProductPrice'+orderedProductPrice+'order.orderQuantity'+order.orderQuantity);
                                   var amountToPay=order.orderQuantity * orderedProductPrice;
                                   console.log('Amount needed to pay'+amountToPay);
                                   for(var n=0;n<customerObject.length;n++)
                                   {
                                       if(customerObject[n].balance < amountToPay)
                                       {
                                           throw new Error('Insufficient fund for requested order');
                                       }
                                       else
                                       {
                                           customerObject[n].balance-=amountToPay;
                                       }
                                   }
                                   return getParticipantRegistry(NS + '.Customer')
                                   .then
                                   (
                                       function(customerRegistry)
                                       {
                                           return customerRegistry.updateAll(customerObject);
                                       }
                                   )
                               }
                           )
                           .then
                           (
                               function()
                               {
                                   return query('validateRetailer',{retailerEmail:order.orderProviderName});
                               }
                           )
                           .then
                           (
                               function(retailerObject)
                               {
                                   console.log('query executed successfully');
                                   console.log('orderedProductPrice'+orderedProductPrice+'order.orderQuantity'+order.orderQuantity);
                                   var amountToPay=order.orderQuantity * orderedProductPrice;
                                   console.log('Amount needed to pay'+amountToPay);
                                   for(n=0;n<retailerObject.length;n++)
                                   {
                                       retailerObject[n].balance+=amountToPay;
                                   }
                                   return getParticipantRegistry(NS + '.Retailer')
                                   .then
                                   (
                                       function(retailerRegistry)
                                       {
                                           return retailerRegistry.updateAll(retailerObject);
                                       }
                                   )
                               }
                           )
                       }
                   }
               )
              }  */
       })
       });
   }
   




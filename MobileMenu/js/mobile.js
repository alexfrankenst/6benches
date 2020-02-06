var wrap=document.createElement('div');
wrap.setAttribute('class','wrapper');
document.body.appendChild(wrap);

var prodcont=document.getElementById('prodCont');
wrap.appendChild(prodcont);
var prod="";
var mob=[
            {
                img:"xr.jpeg",
                name:"Apple Iphone XR (Black, 32 GB)",
                ROM:"32 GB ROM",
                size:"11.94 cm (4.7 inch) Retina HD Display",
                camera:"12MP Rear Camera| 7MP Front Camera",
                processor:"Apple A10 Fusion 64-bit processor and Embedded M10 Motion Co-processor",
                os:"iOS 13 compatible",
                warranty:"Brand Warranty of 1 Year",
                Price:"24,999",
                drop:"29,900",
                or:"Or Pay 24,499+500 ",
                emi:"No Cost EMI",
                exch:"Upto 14,050 Off on Exchange"
            },
            {
                img:"11.jpeg",
                name:"Apple Iphone 11 (Black, 32 GB)",
                ROM:"32 GB ROM",
                size:"11.94 cm (4.7 inch) Retina HD Display",
                camera:"12MP Rear Camera| 7MP Front Camera",
                processor:"Apple A10 Fusion 64-bit processor and Embedded M10 Motion Co-processor",
                os:"iOS 13 compatible",
                warranty:"Brand Warranty of 1 Year",
                Price:"24,999",
                drop:"29,900",
                or:"Or Pay 24,499+500 ",
                emi:"No Cost EMI",
                exch:"Upto 14,050 Off on Exchange"
            },
            {
                img:"apple.jpeg",
                name:"Apple Iphone 7(Black, 32 GB)",
                ROM:"32 GB ROM",
                size:"11.94 cm (4.7 inch) Retina HD Display",
                camera:"12MP Rear Camera| 7MP Front Camera",
                processor:"Apple A10 Fusion 64-bit processor and Embedded M10 Motion Co-processor",
                os:"iOS 13 compatible",
                warranty:"Brand Warranty of 1 Year",
                Price:"24,999",
                drop:"29,900",
                or:"Or Pay 24,499+500 ",
                emi:"No Cost EMI",
                exch:"Upto 14,050 Off on Exchange"
            }
        ]
for(x of mob){
    prod += "<div class='top'><div class='img'><img src='img/"+ x.img +"'></div><div class='desc'><a href='#'><b>"+x.name+"</b></a><p>"+x.ROM+"</p><p>"+x.size+"</p><p>"+x.camera+"</p><p>"+x.processor+"</p><p>"+x.os+"</p><p>"+x.warranty+"</div><div class='price'><p><b>"+x.Price+"</b></p><p><del>"+x.drop+"</del></p><p>"+x.emi+"</p><p>"+x.exch+"</p></div><div class='clr'></div></div>"
}
prodcont.innerHTML=prod;
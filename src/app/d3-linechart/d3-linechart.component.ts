import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { ForexDailyService } from '../forex-daily.service';

export interface CurrencyCodes {
  currencyCode: string;
  currencyName: string;
}

interface Margins {
  top: number;
  bottom: number;
  right: number;
  left: number;
}

@Component({
  selector: 'app-d3-linechart',
  templateUrl: './d3-linechart.component.html',
  styleUrls: ['./d3-linechart.component.scss'],
  encapsulation: ViewEncapsulation.None

})
//TODO move to sensible place
export class D3LinechartComponent implements OnInit {

  currencies: CurrencyCodes[] = [
    {
      "currencyCode": "AED",
      "currencyName": "United Arab Emirates Dirham"
    },
    {
      "currencyCode": "AFN",
      "currencyName": "Afghan Afghani"
    },
    {
      "currencyCode": "ALL",
      "currencyName": "Albanian Lek"
    },
    {
      "currencyCode": "AMD",
      "currencyName": "Armenian Dram"
    },
    {
      "currencyCode": "ANG",
      "currencyName": "Netherlands Antillean Guilder"
    },
    {
      "currencyCode": "AOA",
      "currencyName": "Angolan Kwanza"
    },
    {
      "currencyCode": "ARS",
      "currencyName": "Argentine Peso"
    },
    {
      "currencyCode": "AUD",
      "currencyName": "Australian Dollar"
    },
    {
      "currencyCode": "AWG",
      "currencyName": "Aruban Florin"
    },
    {
      "currencyCode": "AZN",
      "currencyName": "Azerbaijani Manat"
    },
    {
      "currencyCode": "BAM",
      "currencyName": "Bosnia-Herzegovina Convertible Mark"
    },
    {
      "currencyCode": "BBD",
      "currencyName": "Barbadian Dollar"
    },
    {
      "currencyCode": "BDT",
      "currencyName": "Bangladeshi Taka"
    },
    {
      "currencyCode": "BGN",
      "currencyName": "Bulgarian Lev"
    },
    {
      "currencyCode": "BHD",
      "currencyName": "Bahraini Dinar"
    },
    {
      "currencyCode": "BIF",
      "currencyName": "Burundian Franc"
    },
    {
      "currencyCode": "BMD",
      "currencyName": "Bermudan Dollar"
    },
    {
      "currencyCode": "BND",
      "currencyName": "Brunei Dollar"
    },
    {
      "currencyCode": "BOB",
      "currencyName": "Bolivian Boliviano"
    },
    {
      "currencyCode": "BRL",
      "currencyName": "Brazilian Real"
    },
    {
      "currencyCode": "BSD",
      "currencyName": "Bahamian Dollar"
    },
    {
      "currencyCode": "BTN",
      "currencyName": "Bhutanese Ngultrum"
    },
    {
      "currencyCode": "BWP",
      "currencyName": "Botswanan Pula"
    },
    {
      "currencyCode": "BZD",
      "currencyName": "Belize Dollar"
    },
    {
      "currencyCode": "CAD",
      "currencyName": "Canadian Dollar"
    },
    {
      "currencyCode": "CDF",
      "currencyName": "Congolese Franc"
    },
    {
      "currencyCode": "CHF",
      "currencyName": "Swiss Franc"
    },
    {
      "currencyCode": "CLF",
      "currencyName": "Chilean Unit of Account UF"
    },
    {
      "currencyCode": "CLP",
      "currencyName": "Chilean Peso"
    },
    {
      "currencyCode": "CNH",
      "currencyName": "Chinese Yuan Offshore"
    },
    {
      "currencyCode": "CNY",
      "currencyName": "Chinese Yuan"
    },
    {
      "currencyCode": "COP",
      "currencyName": "Colombian Peso"
    },
    {
      "currencyCode": "CUP",
      "currencyName": "Cuban Peso"
    },
    {
      "currencyCode": "CVE",
      "currencyName": "Cape Verdean Escudo"
    },
    {
      "currencyCode": "CZK",
      "currencyName": "Czech Republic Koruna"
    },
    {
      "currencyCode": "DJF",
      "currencyName": "Djiboutian Franc"
    },
    {
      "currencyCode": "DKK",
      "currencyName": "Danish Krone"
    },
    {
      "currencyCode": "DOP",
      "currencyName": "Dominican Peso"
    },
    {
      "currencyCode": "DZD",
      "currencyName": "Algerian Dinar"
    },
    {
      "currencyCode": "EGP",
      "currencyName": "Egyptian Pound"
    },
    {
      "currencyCode": "ERN",
      "currencyName": "Eritrean Nakfa"
    },
    {
      "currencyCode": "ETB",
      "currencyName": "Ethiopian Birr"
    },
    {
      "currencyCode": "EUR",
      "currencyName": "Euro"
    },
    {
      "currencyCode": "FJD",
      "currencyName": "Fijian Dollar"
    },
    {
      "currencyCode": "FKP",
      "currencyName": "Falkland Islands Pound"
    },
    {
      "currencyCode": "GBP",
      "currencyName": "British Pound Sterling"
    },
    {
      "currencyCode": "GEL",
      "currencyName": "Georgian Lari"
    },
    {
      "currencyCode": "GHS",
      "currencyName": "Ghanaian Cedi"
    },
    {
      "currencyCode": "GIP",
      "currencyName": "Gibraltar Pound"
    },
    {
      "currencyCode": "GMD",
      "currencyName": "Gambian Dalasi"
    },
    {
      "currencyCode": "GNF",
      "currencyName": "Guinean Franc"
    },
    {
      "currencyCode": "GTQ",
      "currencyName": "Guatemalan Quetzal"
    },
    {
      "currencyCode": "GYD",
      "currencyName": "Guyanaese Dollar"
    },
    {
      "currencyCode": "HKD",
      "currencyName": "Hong Kong Dollar"
    },
    {
      "currencyCode": "HNL",
      "currencyName": "Honduran Lempira"
    },
    {
      "currencyCode": "HRK",
      "currencyName": "Croatian Kuna"
    },
    {
      "currencyCode": "HTG",
      "currencyName": "Haitian Gourde"
    },
    {
      "currencyCode": "HUF",
      "currencyName": "Hungarian Forint"
    },
    {
      "currencyCode": "IDR",
      "currencyName": "Indonesian Rupiah"
    },
    {
      "currencyCode": "ILS",
      "currencyName": "Israeli New Sheqel"
    },
    {
      "currencyCode": "INR",
      "currencyName": "Indian Rupee"
    },
    {
      "currencyCode": "IQD",
      "currencyName": "Iraqi Dinar"
    },
    {
      "currencyCode": "IRR",
      "currencyName": "Iranian Rial"
    },
    {
      "currencyCode": "JEP",
      "currencyName": "Jersey Pound"
    },
    {
      "currencyCode": "JMD",
      "currencyName": "Jamaican Dollar"
    },
    {
      "currencyCode": "JOD",
      "currencyName": "Jordanian Dinar"
    },
    {
      "currencyCode": "JPY",
      "currencyName": "Japanese Yen"
    },
    {
      "currencyCode": "KES",
      "currencyName": "Kenyan Shilling"
    },
    {
      "currencyCode": "KGS",
      "currencyName": "Kyrgystani Som"
    },
    {
      "currencyCode": "KHR",
      "currencyName": "Cambodian Riel"
    },
    {
      "currencyCode": "KMF",
      "currencyName": "Comorian Franc"
    },
    {
      "currencyCode": "KPW",
      "currencyName": "North Korean Won"
    },
    {
      "currencyCode": "KRW",
      "currencyName": "South Korean Won"
    },
    {
      "currencyCode": "KWD",
      "currencyName": "Kuwaiti Dinar"
    },
    {
      "currencyCode": "KYD",
      "currencyName": "Cayman Islands Dollar"
    },
    {
      "currencyCode": "KZT",
      "currencyName": "Kazakhstani Tenge"
    },
    {
      "currencyCode": "LAK",
      "currencyName": "Laotian Kip"
    },
    {
      "currencyCode": "LBP",
      "currencyName": "Lebanese Pound"
    },
    {
      "currencyCode": "LKR",
      "currencyName": "Sri Lankan Rupee"
    },
    {
      "currencyCode": "LRD",
      "currencyName": "Liberian Dollar"
    },
    {
      "currencyCode": "LSL",
      "currencyName": "Lesotho Loti"
    },
    {
      "currencyCode": "LYD",
      "currencyName": "Libyan Dinar"
    },
    {
      "currencyCode": "MAD",
      "currencyName": "Moroccan Dirham"
    },
    {
      "currencyCode": "MDL",
      "currencyName": "Moldovan Leu"
    },
    {
      "currencyCode": "MGA",
      "currencyName": "Malagasy Ariary"
    },
    {
      "currencyCode": "MKD",
      "currencyName": "Macedonian Denar"
    },
    {
      "currencyCode": "MMK",
      "currencyName": "Myanma Kyat"
    },
    {
      "currencyCode": "MNT",
      "currencyName": "Mongolian Tugrik"
    },
    {
      "currencyCode": "MOP",
      "currencyName": "Macanese Pataca"
    },
    {
      "currencyCode": "MRO",
      "currencyName": "Mauritanian Ouguiya (pre-2018)"
    },
    {
      "currencyCode": "MRU",
      "currencyName": "Mauritanian Ouguiya"
    },
    {
      "currencyCode": "MUR",
      "currencyName": "Mauritian Rupee"
    },
    {
      "currencyCode": "MVR",
      "currencyName": "Maldivian Rufiyaa"
    },
    {
      "currencyCode": "MWK",
      "currencyName": "Malawian Kwacha"
    },
    {
      "currencyCode": "MXN",
      "currencyName": "Mexican Peso"
    },
    {
      "currencyCode": "MYR",
      "currencyName": "Malaysian Ringgit"
    },
    {
      "currencyCode": "MZN",
      "currencyName": "Mozambican Metical"
    },
    {
      "currencyCode": "NAD",
      "currencyName": "Namibian Dollar"
    },
    {
      "currencyCode": "NGN",
      "currencyName": "Nigerian Naira"
    },
    {
      "currencyCode": "NOK",
      "currencyName": "Norwegian Krone"
    },
    {
      "currencyCode": "NPR",
      "currencyName": "Nepalese Rupee"
    },
    {
      "currencyCode": "NZD",
      "currencyName": "New Zealand Dollar"
    },
    {
      "currencyCode": "OMR",
      "currencyName": "Omani Rial"
    },
    {
      "currencyCode": "PAB",
      "currencyName": "Panamanian Balboa"
    },
    {
      "currencyCode": "PEN",
      "currencyName": "Peruvian Nuevo Sol"
    },
    {
      "currencyCode": "PGK",
      "currencyName": "Papua New Guinean Kina"
    },
    {
      "currencyCode": "PHP",
      "currencyName": "Philippine Peso"
    },
    {
      "currencyCode": "PKR",
      "currencyName": "Pakistani Rupee"
    },
    {
      "currencyCode": "PLN",
      "currencyName": "Polish Zloty"
    },
    {
      "currencyCode": "PYG",
      "currencyName": "Paraguayan Guarani"
    },
    {
      "currencyCode": "QAR",
      "currencyName": "Qatari Rial"
    },
    {
      "currencyCode": "RON",
      "currencyName": "Romanian Leu"
    },
    {
      "currencyCode": "RSD",
      "currencyName": "Serbian Dinar"
    },
    {
      "currencyCode": "RUB",
      "currencyName": "Russian Ruble"
    },
    {
      "currencyCode": "RUR",
      "currencyName": "Old Russian Ruble"
    },
    {
      "currencyCode": "RWF",
      "currencyName": "Rwandan Franc"
    },
    {
      "currencyCode": "SAR",
      "currencyName": "Saudi Riyal"
    },
    {
      "currencyCode": "SBDf",
      "currencyName": "Solomon Islands Dollar"
    },
    {
      "currencyCode": "SCR",
      "currencyName": "Seychellois Rupee"
    },
    {
      "currencyCode": "SDG",
      "currencyName": "Sudanese Pound"
    },
    {
      "currencyCode": "SEK",
      "currencyName": "Swedish Krona"
    },
    {
      "currencyCode": "SGD",
      "currencyName": "Singapore Dollar"
    },
    {
      "currencyCode": "SHP",
      "currencyName": "Saint Helena Pound"
    },
    {
      "currencyCode": "SLL",
      "currencyName": "Sierra Leonean Leone"
    },
    {
      "currencyCode": "SOS",
      "currencyName": "Somali Shilling"
    },
    {
      "currencyCode": "SRD",
      "currencyName": "Surinamese Dollar"
    },
    {
      "currencyCode": "SYP",
      "currencyName": "Syrian Pound"
    },
    {
      "currencyCode": "SZL",
      "currencyName": "Swazi Lilangeni"
    },
    {
      "currencyCode": "THB",
      "currencyName": "Thai Baht"
    },
    {
      "currencyCode": "TJS",
      "currencyName": "Tajikistani Somoni"
    },
    {
      "currencyCode": "TMT",
      "currencyName": "Turkmenistani Manat"
    },
    {
      "currencyCode": "TND",
      "currencyName": "Tunisian Dinar"
    },
    {
      "currencyCode": "TOP",
      "currencyName": "Tongan Pa'anga"
    },
    {
      "currencyCode": "TRY",
      "currencyName": "Turkish Lira"
    },
    {
      "currencyCode": "TTD",
      "currencyName": "Trinidad and Tobago Dollar"
    },
    {
      "currencyCode": "TWD",
      "currencyName": "New Taiwan Dollar"
    },
    {
      "currencyCode": "TZS",
      "currencyName": "Tanzanian Shilling"
    },
    {
      "currencyCode": "UAH",
      "currencyName": "Ukrainian Hryvnia"
    },
    {
      "currencyCode": "UGX",
      "currencyName": "Ugandan Shilling"
    },
    {
      "currencyCode": "USD",
      "currencyName": "United States Dollar"
    },
    {
      "currencyCode": "UYU",
      "currencyName": "Uruguayan Peso"
    },
    {
      "currencyCode": "UZS",
      "currencyName": "Uzbekistan Som"
    },
    {
      "currencyCode": "VND",
      "currencyName": "Vietnamese Dong"
    },
    {
      "currencyCode": "VUV",
      "currencyName": "Vanuatu Vatu"
    },
    {
      "currencyCode": "WST",
      "currencyName": "Samoan Tala"
    },
    {
      "currencyCode": "XAF",
      "currencyName": "CFA Franc BEAC"
    },
    {
      "currencyCode": "XAG",
      "currencyName": "Silver Ounce"
    },
    {
      "currencyCode": "XAU",
      "currencyName": "Gold Ounce"
    },
    {
      "currencyCode": "XCD",
      "currencyName": "East Caribbean Dollar"
    },
    {
      "currencyCode": "XDR",
      "currencyName": "Special Drawing Rights"
    },
    {
      "currencyCode": "XOF",
      "currencyName": "CFA Franc BCEAO"
    },
    {
      "currencyCode": "XPF",
      "currencyName": "CFP Franc"
    },
    {
      "currencyCode": "YER",
      "currencyName": "Yemeni Rial"
    },
    {
      "currencyCode": "ZAR",
      "currencyName": "South African Rand"
    },
    {
      "currencyCode": "ZMW",
      "currencyName": "Zambian Kwacha"
    },
    {
      "currencyCode": "ZWL",
      "currencyName": "Zimbabwean Dollar"
    }
  ];

  private svg: d3.Selection<d3.BaseType, any, HTMLElement, any>;
  private g: d3.Selection<d3.BaseType, any, HTMLElement, any>;
  private linePath: d3.Selection<d3.BaseType, any, HTMLElement, any>;
  private xAxisG: d3.Selection<d3.BaseType, any, HTMLElement, any>;
  private yAxisG: d3.Selection<d3.BaseType, any, HTMLElement, any>;

  private line: d3.Line<[number, number]>;
  private y: d3.ScaleLinear<number, number>;
  private x: d3.ScaleTime<number, number>;

  private graphData: Array<any> = [];
  private margin: Margins;
  private width: number;
  private height: number;
  private forexDaily: Object;

  constructor(private data: ForexDailyService) { }


  selectedItem(value) {
    this.data.getForexDaily(value.value, 'USD').subscribe(
      _data => {
        this.forexDaily = _data['Time Series FX (Daily)'];

        console.log(this.forexDaily);

        this.update();
      }
    );
  }

  update() {

    this.sortData();


    this.x.domain(d3.extent(this.graphData, (d: any) => d.date));

    this.y.domain(d3.extent(this.graphData, (d: any) => d.close));

    this.yAxisG.call(d3.axisLeft(this.y));

    this.xAxisG.call(d3.axisBottom(this.x))

    this.linePath
      .datum(this.graphData)
      .transition()
      .attr("d", this.line);

  }

  sortData() {
    let parseTime = d3.timeParse("%Y-%m-%d");
    this.graphData = [];
    for (let dataRow in this.forexDaily) {
      this.graphData.push({
        date: parseTime(dataRow),
        close: this.forexDaily[dataRow]['4. close']
      });
    }
  }

  ngOnInit() {

  }

  initGraph() {
    this.svg = d3.select("svg");

    this.margin = { top: 20, right: 20, bottom: 30, left: 50 };

    this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
    this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
    this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left},${this.margin.top})`);

    this.sortData();

    this.x = d3.scaleTime()
      .rangeRound([0, this.width]);

    this.y = d3.scaleLinear()
      .rangeRound([this.height, 0]);

    this.line = d3.line()
      .x((d: any) => this.x(d.date))
      .y((d: any) => this.y(d.close));

    this.x.domain(d3.extent(this.graphData, (d: any) => d.date));

    this.y.domain(d3.extent(this.graphData, (d: any) => d.close));

    this.xAxisG = this.g.append("g")
      .attr("transform", `translate(0,${this.height})`)
      .call(d3.axisBottom(this.x))
      .select(".domain")
      .remove();

    this.yAxisG = this.g.append("g")
      .call(d3.axisLeft(this.y))


    this.linePath = this.g.append("path")
      .datum(this.graphData)
      .attr('class', 'd3-linechart__line')
      .attr("d", this.line);

  }

  ngAfterContentInit() {

    this.data.getForexDaily('GBP', 'USD').subscribe(
      _data => {
        this.forexDaily = _data['Time Series FX (Daily)'];

        console.log(this.forexDaily);

        this.initGraph();
      }
    );

  }
}
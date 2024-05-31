<template>
  <div class="financial-analysis">
    <div class="row">
      <H1 class="label"> Financial Analysis </H1>
    </div>
    <div class="row">
      <div class="label">Project:</div>
      <div class="value">Arcadia Residence</div>
    </div>
    <div class="row">
      <div class="label">Unit No:</div>
      <div class="value">A-13-03A</div>
    </div>
    <div class="row">
      <div class="label">Tower:</div>
      <div class="value">
        <select v-model="tower">
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="label">Number of units sold:</div>
      <div class="value">
        <input type="number" v-model="numberOfUnitsSold" />
      </div>
    </div>

    <div class="row">
      <div class="label">Type:</div>
      <div class="value">
        <select v-model="Type">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="label">Buyer Type:</div>
      <div class="value">
        <select v-model="buyerType">
          <option value="Bumi">Bumi</option>
          <option value="Non Bumi">Non Bumi</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="label">Gross Price:</div>
      <div class="value">RM <input type="number" v-model="grossPrice" step="0.01" /></div>
    </div>

    <div class="row">
      <div class="label">Tenure:</div>
      <div class="value">
        <input type="number" v-model="tenure" />
      </div>
    </div>

    <div class="row">
      <div class="label">Bumi Discount:</div>
      <div class="value">RM {{ bumiDiscountPct }} ({{ buyerType == "Bumi" ? "10%" : "0%" }})</div>
    </div>
    <div class="row">
      <div class="reverse-label">New SPA Price:</div>
      <div class="value">RM {{ buyerType == "Bumi" ? spaPrice : grossPrice.toFixed(2) }}</div>
    </div>
    <div class="row">
      <div class="label">Developer Rebate:</div>
      <div class="value">RM {{ developerRebate }} ({{ tower === "A" ? "10% for All" : buyerType == "Bumi" ? "10%" : "8%" }})</div>
    </div>
    <div class="row">
      <div class="label">Net Price:</div>
      <div class="value">RM {{ netPrice }}</div>
    </div>
    <div class="row">
      <div class="reverse-label">Booking Fees:</div>
      <div class="value">RM {{ bookingFees }}</div>
    </div>
    <div class="row">
      <div class="label">Loan Amount:</div>
      <div class="value">RM {{ loanAmount }}</div>
    </div>
    <div class="row">
      <div class="label">Loan Interest:</div>
      <div class="value">{{ loanInterest }}%</div>
    </div>
    <div class="row">
      <div class="label">Monthly Instalment:</div>
      <div class="value">RM {{ monthlyInstalment.toFixed(0) }}</div>
    </div>
    <div class="row">
      <div class="label">Loan Stamp Duty:</div>
      <div class="value">RM {{ loanStampDuty.toFixed(0) }}</div>
    </div>
    <div class="row">
      <div class="label">MOT:</div>
      <div class="value">RM {{ mot.toFixed(2) }}</div>
    </div>
    <div class="row">
      <div class="label">Cash Back:</div>
      <div class="value">RM {{ cashBack }}</div>
    </div>
    <div class="row">
      <div class="label">Free Legal Fees for SPA & Loan:</div>
      <div class="value">RM {{ freeLegalFees }}</div>
    </div>
    <div class="row">
      <div class="label">Rental Amount:</div>
      <div class="value">RM {{ rentalAmount }}</div>
    </div>
    <div class="row">
      <div class="reverse-label">Positive cash flow:</div>
      <div class="value">RM {{ positiveCashFlow }}</div>
    </div>
    <div class="row">
      <div class="label">Rental Yield:</div>
      <div class="value">{{ rentalYield.toFixed(2) }}%</div>
    </div>
    <span class="description">(Based on current estimate, subject to change)</span>
  </div>
  <CashFlow />
  <AcadiaQ ref="acadiaQ" :Type="Type" :projectName="Acadia" :grossPrice="grossPrice" :Tower="tower" :buyerType="buyerType" :tenure="tenure" />
</template>

<script>
import AcadiaQ from "./AcadiaQ.vue";
import CashFlow from "./CashFlow.vue";
export default {
props:{
  projectCode: {
      type: String,
      required: true,
    },
},
  
  components: {
    AcadiaQ,
    CashFlow,
  },
  data() {
    return {
      grossPrice: 362500.0,
      bumiDiscount: 36250.0,
      bookingFees: 500.0,
      loanInterest: 4.1,
      tenure: 35,
      cashBack: 10000.0,
      rentalAmount: 2000.0,
      unitNumber: 50, // Change this value to test different unit numbers
      Type: "A",
      tower: "A", // Change this value to 'B' to test Tower B
      buyerType: "Bumi", // Change this value to 'Non Bumi' for non-bumi buyer
      numberOfUnitsSold: 210,
    };
  },

  computed: {
    bumiDiscountPct() {
      if (this.buyerType === "Bumi") {
        return this.grossPrice * 0.1; // 10% discount for Bumi buyers
      } else {
        return 0; // No discount for Non-Bumi buyers
      }
    },
    spaPrice() {
      return this.grossPrice - this.bumiDiscount;
    },
    netPrice() {
      return this.spaPrice - this.developerRebate;
    },
    developerRebate() {
      if (this.tower === "A") {
        return this.spaPrice * 0.1; // 10% for Tower A
      } else if (this.tower === "B") {
        if (this.buyerType === "Bumi") {
          return this.spaPrice * 0.1; // 10% for Bumi in Tower B
        } else {
          return this.spaPrice * 0.08; // 8% for Non-Bumi  in Tower B
        }
      } else {
        return 0; // No rebate for other towers
      }
    },
    loanAmount() {
      // Loan Amount is 90% of Net Price
      return this.netPrice;
    },
    monthlyInstalment() {
      const monthlyInterestRate = this.loanInterest / 100 / 12;
      const numberOfPayments = this.tenure * 12;
      return (this.loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    },
    loanStampDuty() {
      const stampDutyRate = 0.005; // 0.5% of the loan amount
      return this.loanAmount * stampDutyRate;
    },
    mot() {
      const netPrice = this.netPrice;
      let mot = 0;

      if (netPrice > 1000000) {
        mot += (netPrice - 10000000) * 0.04;
        mot += 500000 * 0.03;
        mot += 400000 * 0.02;
        mot += 100000 * 0.01;
      } else if (netPrice > 500000) {
        mot += (netPrice - 500000) * 0.03;
        mot += 400000 * 0.02;
        mot += 100000 * 0.01;
      } else if (netPrice > 100000) {
        mot += (netPrice - 100000) * 0.02;
        mot += 100000 * 0.01;
      }
      return mot;
    },
    freeLegalFees() {
      // Calculate Free Legal Fees based on Tower A's special incentives
      if (this.tower === "A") {
        if (this.numberOfUnitsSold >= 1 && this.numberOfUnitsSold <= 95) {
          return 10000.0;
        } else if (this.numberOfUnitsSold >= 96 && this.numberOfUnitsSold <= 190) {
          return 8000.0;
        } else if (this.numberOfUnitsSold >= 191 && this.numberOfUnitsSold <= 253) {
          return 5000.0;
        }
      }
      return 0; // For Tower B or other units, no special incentive
    },
    positiveCashFlow() {
      // Income is Monthly Rental Installment
      return (this.rentalAmount - this.monthlyInstalment).toFixed(0);
    },
    rentalYield() {
      // Rental Yield is Rental / Installment * 100
      return (this.rentalAmount / this.monthlyInstalment) * 100;
    },
  },
};
</script>

<style>
.financial-analysis {
  max-width: 40%;
  margin: auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: #e6f2ff;
}

.row {
  display: flex;
  margin-bottom: 10px;
}

.label {
  flex: 1;
  font-weight: bold;
  text-align: left; /* Left justify the label */
}

.value {
  flex: 1;
  text-align: left; /* Left justify the value */
}

.reverse-label {
  /* Reversed styling */
  font-weight: bold;
  text-align: left;
  color: white;
  flex: 1;
  background-color: blue;
  font-family: Arial, sans-serif;
}
/* Adjust styling for smaller screens */
@media screen and (max-width: 768px) {
  .financial-analysis {
    max-width: 80%;
  }
}

@media screen and (max-width: 576px) {
  .financial-analysis {
    max-width: 100%;
  }
}
</style>

<template>
  <div class="financial-analysis">
    <h1>Financial Analysis - {{ projectName }}</h1>
    <!-- Rest of the component remains the same -->
    <div v-for="(qa, index) in questionsAndAnswers" :key="index" class="qa-pair">
      <input type="checkbox" v-model="qa.checked" />
      <p @click="toggleAnswer(index)" class="question">{{ index + 1 }}. {{ qa.question }}</p>
      <p v-if="qa.showAnswer" class="answer" v-html="qa.prop"></p>
    </div>
    <h1>{{ bp }}</h1>
  </div>
</template>
<script>
export default {
  name: "FinancialAnalysis",
  props: {
    projectName: {
      type: String,
      required: true,
    },
    grossPrice: {
      type: Number,
      required: true,
    },
    Tower: {
      type: String,
      required: true,
    },
    buyerType: {
      type: String,
      required: true,
    },
    tenure: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      bp: 12,
      questionsAndAnswers: [],
      atProp: [
        { name: "@tower", index: 0, func: this.Tower },
        { name: "@grossPrice", index: 1, func: this.grossPrice },
        { name: "@tenure", index: 2, func: this.tenure },
        { name: "@buyerType", index: 3, func: this.buyerType },
        { name: "@type", index: 4, func: this.Type },
        { name: "@bumiDiscountPct", index: 4, func: this.bp },
      ],
    };
  },
  watch: {
    Tower(newTower) {
      this.newFunction("@tower", newTower);
    },
    grossPrice(newTower) {
      this.newFunction("@grossPrice", newTower);
    },
    tenure(newTower) {
      this.newFunction("@tenure", newTower);
    },
    buyerType(newTower) {
      this.newFunction("@buyerType", newTower);
      this.bp = this.bumiDiscountPct();
    },
    Type(newTower) {
      this.newFunction("@type", newTower);
    },
    questionsAndAnswers: {
      handler() {
        this.saveCheckboxStatus();
      },
      deep: true,
    },
  },
  mounted() {
    this.populateQuestionsAndAnswers();
    this.bumiDiscountPct();
  },
  computed: {
    bumiDiscountPct() {
      if (this.buyerType === "Bumi") {
        return this.grossPrice * 0.1; // 10% discount for Bumi buyers
      } else {
        return 20; // No discount for Non-Bumi buyers
      }
    },
  },
  methods: {
    checkIfWordExists(word, sentence) {
      return sentence.includes(word);
    },
    newFunction() {
      for (let i = 0; i < this.atProp.length; i++) {
        let ss = this.atProp[i].name;
        let vv = this.atProp[i].func;

        for (let j = 0; j < this.questionsAndAnswers.length; j++) {
          let ans = this.questionsAndAnswers[j].answer.trim();
          if (this.checkIfWordExists(ss, ans)) {
            this.questionsAndAnswers[j].prop = this.computeString(ans, ss, vv);
          }
        }
      }
    },
    computeString(input, word, value) {
      const regex = new RegExp(`(?<!@)${word}(?!\\w)`, "g");
      return input.replace(regex, value);
    },
    async populateQuestionsAndAnswers() {
      try {
        const response = await fetch("questions.txt");
        const text = await response.text();
        const lines = text.split("\n");
        this.questionsAndAnswers = lines.map((line) => {
          const [question, answer, prop] = line.split("|");
          return { question, answer, prop, showAnswer: false, checked: false };
        });

        // Load checkbox status from localStorage
        this.loadCheckboxStatus();

        for (let i = 0; i < this.questionsAndAnswers.length; i++) {
          this.questionsAndAnswers[i].prop = this.questionsAndAnswers[i].answer;
        }
        this.newFunction();
      } catch (error) {
        console.error("Error reading file:", error);
      }
    },
    loadCheckboxStatus() {
      const savedStatus = JSON.parse(localStorage.getItem("checkboxStatus"));
      if (savedStatus) {
        this.questionsAndAnswers.forEach((qa, index) => {
          if (savedStatus[index] !== undefined) {
            qa.checked = savedStatus[index];
          }
        });
      }
    },
    saveCheckboxStatus() {
      const status = this.questionsAndAnswers.map((qa) => qa.checked);
      localStorage.setItem("checkboxStatus", JSON.stringify(status));
    },
    toggleAnswer(index) {
      this.questionsAndAnswers[index].showAnswer = !this.questionsAndAnswers[index].showAnswer;
    },
  },
};
</script>

<style>
.financial-analysis {
  margin: 20px;
  font-family: Arial, sans-serif;
  text-align: left;
}

.qa-pair {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.qa-pair input[type="checkbox"] {
  margin-right: 10px;
  margin-top: 3px;
}

.question {
  font-weight: bold;
  cursor: pointer;
}

.answer {
  margin-left: 30px;
  color: green;
}
</style>

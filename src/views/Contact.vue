<template>
  <div class="contact d-flex justify-center mx-auto">
    <div>
      <h4 class="focus">GET IN TOUCH</h4>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
        at its layout. </p>
      <div class="form--wrapper">
        <form @submit.prevent="submit">
          <div class="form--title">
            <h4>Contact Form</h4>
          </div>
          <div class="fields">
            <div v-for="(field, i) in fields" :key="i" class="field--item">
              <basic-input :label="field.label" :type="field.type || 'text'" required />
            </div>
          </div>
          <div class="d-flex justify-end my-8">
            <base-button>Send</base-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInput from "@/components/resuables/BasicInput";
import BaseButton from "@/components/resuables/BaseButton";
export default {
  name: 'Contact',
  components: {BaseButton, BasicInput},
  data: () => ({
    fields: [
      {
        label: 'Name'
      },
      {
        label: 'Email Address'
      },
      {
        label: 'Message',
        type: 'textarea'
      }
    ]
  }),
  methods: {
    submit () {
    //
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  max-width: 1400px;
  width: 100%;
  padding: 20px;

  & > div {
    max-width: 450px;
  }

  .form--wrapper {
    background: var(--card-background);
    padding: 10px 18px;
  }

  .fields {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);

    .field--item {

      &:last-child {
        grid-column: 1/3;
      }
    }
  }
}

.focus {
  font-size: 24px;
  font-weight: bold;
}
</style>

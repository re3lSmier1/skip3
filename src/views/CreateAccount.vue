<template>
  <div style="padding: 15px">
    <div style="text-align: center">
      <img class="logo" src="../assets/skiptheline_text_dark.png" alt="" />
    </div>
    <div>
      <div style="margin-bottom: 10px">
        <label for="username">Business Name</label>
        <InputText
          id="businessName"
          class="p-inputtext-sm"
          type="text"
          style="width: 100%"
        />
        <!--        <small id="username-help">Enter your username </small>-->
      </div>
      <div style="margin-bottom: 10px">
        <label for="businessDescription">Business Description</label>
        <Textarea
          id="businessDescription"
          rows="2"
          style="width: 100%; resize: none"
        />
        <!--        <small id="username-help">Enter your username </small>-->
      </div>
      <div style="margin-bottom: 10px">
        <label for="businessEmail">Business Email</label>
        <InputText
          id="businessEmail"
          class="p-inputtext-sm"
          type="email"
          style="width: 100%"
        />
        <!--        <small id="username-help">Enter your username </small>-->
      </div>
      <div>
        <label for="businessPhone">Business Phone</label>
        <InputText
          id="businessPhone"
          class="p-inputtext-sm"
          type="text"
          style="width: 100%"
        />
        <!--        <small id="password-help">Enter your password.</small>-->
      </div>
    </div>
    <div v-if="0">
      <div style="margin-bottom: 10px">
        <label for="addressLine1">Address Line 1</label>
        <Textarea
          id="addressLine1"
          rows="2"
          style="width: 100%; resize: none"
        />
        <!--        <small id="username-help">Enter your username </small>-->
      </div>
      <div style="margin-bottom: 10px">
        <label for="state_parish">State/Parish</label>
        <InputText
          id="state_parish"
          class="p-inputtext-sm"
          type="text"
          style="width: 100%"
        />
        <!--        <small id="username-help">Enter your username </small>-->
      </div>
      <div style="margin-bottom: 10px">
        <label for="country">Country</label>
        <span class="p-fluid">
          <AutoComplete
            id="country"
            class="p-autocomplete"
            style="width: 100% !important"
          />
        </span>
        <!--        <small id="username-help">Enter your username </small>-->
      </div>
    </div>
    <div v-if="0">
      <div>
        <label for="businessHash">Business Hash</label>
        <InputText
          id="businessHash"
          class="p-inputtext-sm"
          type="text"
          style="width: 100%"
        />
        <!--        <small id="password-help">Enter your password.</small>-->
      </div>
      <div>
        <label for="operationType">What will you do?</label>
        <SelectButton
          id="operationType"
          optionLabel="name"
          v-model="data.selectedCity"
          :options="data.cities"
          style="width: 100%"
        />
        <!--        <small id="password-help">Enter your password.</small>-->
      </div>
    </div>
    <br />
    <div style="text-align: right">
      <Button
        style="margin-right: 10px; color: #333; font-weight: 600"
        label="I already have an account"
        class="p-button-sm p-button-outline p-button-text"
      />
      <Button
        label="Next | Create Account"
        class="p-button-raised p-button-sm"
        style="background-color: #081229; border: none"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "CreateAccount",
  setup() {
    const value1 = ref<unknown>();
    const categories = ref([
      { name: "Orders", key: "A" },
      { name: "Reservations", key: "M" },
      { name: "Orders & Reservations", key: "P" },
    ]);
    const selectedCategory = ref(categories.value[1]);
    const data = reactive({
      selectedCity: null,
      cities: [
        { name: "Orders", code: "LND" },
        { name: "Reservations", code: "PRS" },
        { name: "Both", code: "RM" },
      ],
    });
    return { value1, data, categories, selectedCategory };
  },
});
</script>

<style scoped>
.p-autocomplete {
  width: 100% !important;
}
</style>

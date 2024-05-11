export default function SpendingInfo() {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.name_cost}>
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={selectedCategory}
          label={selectedCategory}
          onChange={(item) => {
            setSelectedCategory(item.label);
          }}
        />
        <Input title="Cost" placeholder="10.90 $" width={150} />
      </View>
      <View style={styles.note}>
        <Input title="Note" placeholder="A banana" width={315} />
      </View>
    </View>
  );
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-sticky-table',
  templateUrl: './sticky-table.component.html',
  styleUrls: ['./sticky-table.component.scss']
})
export class StickyTableComponent {
  tableData: any[] = [];

  ngOnInit(): void {
    this.generateDummyData();
  }

  generateDummyData(): void {
    for (let i = 0; i < 500; i++) {
      this.tableData.push({
        col1: `Row ${i + 1} Col 1`,
        col2: `Row ${i + 1} Col 2`,
        col3: `Row ${i + 1} Col 3`,
        col4: `Row ${i + 1} Col 4`,
        col5: `Row ${i + 1} Col 5`,
        col6: `Row ${i + 1} Col 6`,
        col7: `Row ${i + 1} Col 7`,
        col8: `Row ${i + 1} Col 8`,
        col9: `Row ${i + 1} Col 9`,
        col10: `Row ${i + 1} Col 10`
      });
    }
  }
}

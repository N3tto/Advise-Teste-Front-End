import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginatorPipe implements PipeTransform {

  transform(value: any[], searchText: string, event?: any): any[] {
    const pageSize = event?.pageSize || 5;
    const pageIndex = event?.pageIndex || 0;

    let filteredValue = value;

    if (searchText) {
      filteredValue = value
        .filter((item: any) => this.matchSearchTerm(item, searchText))
        .map((item: any, index: number) => ({
          index: value.indexOf(item),
          value: item,
        }));
    } else {
      filteredValue = value
        .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
        .map((item: any, index: number) => ({
          index: pageIndex * pageSize + index,
          value: item,
        }));
    }
    return filteredValue;
  }

  matchSearchTerm(item: any, searchText: string): boolean {
    if (item && item.name && typeof item.name === 'string') {
      const itemName = item.name.toLowerCase();
      const searchTerm = searchText.toLowerCase();
      return itemName.includes(searchTerm);
    }
    return false;
  }
}

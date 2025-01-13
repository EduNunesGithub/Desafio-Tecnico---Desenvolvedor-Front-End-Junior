export type Lead = {
  "e-mail": string;
  name: string;
  phone: string;
};

export class Leads {
  private data: Lead[] = [];
  private storageID = "api-leads";

  constructor() {}

  public newLead(lead: Lead) {
    const leads = [...this.getLeads(), lead];

    window.localStorage.setItem(this.storageID, JSON.stringify(leads));

    return leads;
  }

  public getLeads() {
    const storage = window.localStorage.getItem(this.storageID);
    if (storage !== null) this.data = JSON.parse(storage);
    else this.data = [];

    return this.data;
  }
}

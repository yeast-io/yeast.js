

export interface ClientListOutput {
  uid: string;
  agent: string;
  ip: string;
  ipSeedbox: boolean;
  ipv6: string | null;
  ipv6Seedbox: boolean;
  port: string;
  initial: string | null;
  seeding: string;
  leechin: string;
}


export interface BonusOutput {
  formulaParams: {
    pi: number;
    sqrtof2: number;
    logofpointone: number;
    tzeroBonus: string;
    nzeroBonus: string;
    bzeroBonus: string;
    perseedingBonus: number;
    maxseedingBonus: number;
    torrentMsSum: number;
    torrentMsUp: number;
    twoStepBonus: number;
    donortimesBonus: number;
    userClass: string;
    classUp: number;
    donor: boolean;
    enable2fa: boolean;
    h24Count: string;
    atcids: any[];
    atc: string;
    tcids: any[];
    tc: string;
    count: string;
    cas: string;
    a: number;
    finalBs: number;
    lbonus: string;
    ca: string;
    allBonus: number;
    callBonus: number;
    h24Up: number;
    h24UpBs: number;
    userClassBs: number;
    donorBs: number;
    tfaBs: number;
  };
  bonus: {
    BONUS_SAYTHANKS: number;
    BONUS_COMMENT: string;
    BONUS_PROMOTION_LINK_FIRST_CLICKED: string;
    BONUS_ADS_FIRST_CLICKED: string;
    BONUS_UPLOAD_TORRENT: string;
    BONUS_POLLVOTE: string;
    BONUS_OFFERVOTE: string;
    BONUS_FUNBOXREWARD: number;
    BONUS_FUNBOXVOTE: string;
    BONUS_UPLOAD_SUBTITLE: string;
    BONUS_RECEIVETHANKS: number;
  };
}


export interface PeerStateOutput {
  leecher: string;
  seeder: string;
}

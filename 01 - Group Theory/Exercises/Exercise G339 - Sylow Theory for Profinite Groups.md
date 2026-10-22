---
title: 'Exercise G339: Sylow Theory for Profinite Groups'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 4, printed p. 274, PDF p. 293
source_refs:
- S4/ch-IV/sec-2/ex-4
created: '2026-10-23'
---

# Exercise G339: Sylow Theory for Profinite Groups

## Problem Statement

> [!question] Neukirch IV.2.4
> A closed subgroup $H$ of a profinite group $G$ is called a $p$-Sylow subgroup of $G$ if, for every open normal subgroup $N$ of $G$, the group $HN/N$ is a $p$-Sylow subgroup of $G/N$. Show:
> (i) For every prime number $p$, there exists a $p$-Sylow subgroup of $G$.
> (ii) Every pro-$p$-subgroup of $G$ is contained in a $p$-Sylow subgroup.
> (iii) Every two $p$-Sylow subgroups of $G$ are conjugate.

## Hints

> [!hint]- Hint 1
> 在有限商 $G/N$ 中使用有限 Sylow 定理。满射把 Sylow 子群映成 Sylow 子群，也能将指定的 Sylow 子群提升。

> [!hint]- Hint 2
> 为包含给定 pro-$p$ 子群 $Q$，只考虑包含 $QN/N$ 的有限商 Sylow 子群集合；这些有限非空集合仍有兼容提升。

> [!hint]- Hint 3
> 共轭性用紧群中闭集 $C_N=\{g:gP_Ng^{-1}=R_N\}$ 的有限交性质。

## Solution

> [!success]- Independent derivation
> 先记两个有限群事实，均由有限 Sylow 定理得到。若 $F\twoheadrightarrow E$，则 $F$ 的 Sylow $p$ 子群的像是 $E$ 的 Sylow $p$ 子群；任给 $E$ 的 Sylow 子群 $S$，在其原像中取 Sylow 子群即可提升到像为 $S$ 的 Sylow 子群。若还指定原像中的 $p$ 子群 $Q$，可取包含 $Q$ 的那个 Sylow 子群。
>
> **(i) 存在性。** 对每个开正规 $N$，令 $\mathcal S_N$ 为有限群 $G/N$ 的 Sylow $p$ 子群集合。较细商的 Sylow 子群按像映到较粗商的 Sylow 子群，上述提升说明过渡映射满射。非空有限集合的逆极限非空：其乘积紧，兼容条件为闭集，任意有限多条件可在更细商中一次满足。取相容族 $(P_N)$，令
> $$
> P=\{g\in G:gN\in P_N\text{ 对每个 }N\}.
> $$
> 它是闭子群。相容有限 $p$ 群系统的投影满射，故 $PN/N=P_N$；这里的投影满射也可用同一有限交紧性证明。因此 $P$ 是所需 $p$-Sylow 子群。
>
> **(ii) 包含性。** 若 $Q$ 为闭 pro-$p$ 子群，则 $Q_N=QN/N$ 为有限 $p$ 群。令 $\mathcal S_N(Q)$ 为包含 $Q_N$ 的 Sylow 子群集合，有限 Sylow 定理使其非空。给定较粗商中一个这样的 Sylow 子群，在其原像内取包含较细 $Q_M$ 的 Sylow 子群，便得到相容提升，故这些集合过渡满射。第一步的紧性构造给出 $P$，并由所有有限商中的包含关系得到 $Q\subseteq P$。
>
> **(iii) 共轭性。** 若 $P,R$ 为两个 $p$-Sylow 子群，有限 Sylow 共轭性使
> $$
> C_N=\{g\in G:(gPg^{-1})N/N=RN/N\}
> $$
> 非空。它是有限商中一个集合的原像，因而闭。有限个 $N_1,\ldots,N_t$ 的条件可在 $M=\bigcap N_i$ 的有限商中同时满足，所以 $C_N$ 有有限交性质。紧性给出 $g\in\bigcap_NC_N$。两个闭子群若在所有有限商有相同的像则相等（闭子群等于这些像的全体逆像的交），故 $gPg^{-1}=R$。

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 4(i)–(iii), printed p. 274, PDF p. 293]. 独立有限商与紧性证明，保留三问。
- **Convention:** pro-$p$ 子群在这里按通常含义取闭子群；非闭抽象 $p$ 子群需先取闭包后讨论其 pro-$p$ 性质。

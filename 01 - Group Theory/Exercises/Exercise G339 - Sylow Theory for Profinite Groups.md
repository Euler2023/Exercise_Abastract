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
> Apply the finite Sylow theorem in each quotient $G/N$. A surjection maps Sylow subgroups onto Sylow subgroups, and any prescribed Sylow subgroup can be lifted.

> [!hint]- Hint 2
> To contain a given pro-$p$ subgroup $Q$, consider only the Sylow subgroups of the finite quotients containing $QN/N$. These nonempty finite sets still admit compatible lifts.

> [!hint]- Hint 3
> For conjugacy, use the finite-intersection property for the closed subsets $C_N=\{g:gP_Ng^{-1}=R_N\}$ of the compact group.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> First record two finite-group facts, both consequences of the finite Sylow theorem. If $F\twoheadrightarrow E$, the image of a Sylow $p$-subgroup of $F$ is a Sylow $p$-subgroup of $E$. Given a Sylow subgroup $S$ of $E$, taking a Sylow subgroup in its inverse image lifts it to a Sylow subgroup whose image is $S$. If a $p$-subgroup $Q$ of that inverse image is prescribed, choose a Sylow subgroup containing $Q$.
>
> **(i) Existence.** For each open normal subgroup $N$, let $\mathcal S_N$ be the set of Sylow $p$-subgroups of the finite group $G/N$. Taking images maps Sylow subgroups of a finer quotient to those of a coarser quotient, and the lifting fact above makes the transition maps surjective. An inverse limit of nonempty finite sets is nonempty: their product is compact, the compatibility conditions are closed, and any finite collection of conditions can be satisfied in a single finer quotient. Choose a compatible family $(P_N)$ and put
> $$
> P=\{g\in G:gN\in P_N\text{ for every }N\}.
> $$
> This is a closed subgroup. The projections of a compatible system of finite $p$-groups are surjective, so $PN/N=P_N$; projection surjectivity can also be proved by the same compactness and finite-intersection argument. Thus $P$ is the required $p$-Sylow subgroup.
>
> **(ii) Containment.** If $Q$ is a closed pro-$p$ subgroup, then $Q_N=QN/N$ is a finite $p$-group. Let $\mathcal S_N(Q)$ consist of the Sylow subgroups containing $Q_N$; the finite Sylow theorem makes it nonempty. Given such a Sylow subgroup in a coarser quotient, take a Sylow subgroup in its inverse image containing the finer $Q_M$. This gives a compatible lift, so these transition maps are surjective. The compactness construction in the first step produces $P$, and containment in every finite quotient gives $Q\subseteq P$.
>
> **(iii) Conjugacy.** If $P,R$ are two $p$-Sylow subgroups, finite Sylow conjugacy makes
> $$
> C_N=\{g\in G:(gPg^{-1})N/N=RN/N\}
> $$
> nonempty. It is the inverse image of a subset of a finite quotient, hence closed. For finitely many $N_1,\ldots,N_t$, all conditions can be satisfied in the finite quotient by $M=\bigcap N_i$. Thus the sets $C_N$ have the finite-intersection property, and compactness gives $g\in\bigcap_NC_N$. Two closed subgroups with the same image in every finite quotient are equal, since a closed subgroup is the intersection of the full inverse images of its finite quotient images. Therefore $gPg^{-1}=R$.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 4(i)–(iii), printed p. 274, PDF p. 293]. An independent proof through finite quotients and compactness, preserving all three parts.
- **Convention:** A pro-$p$ subgroup here is closed, as usual. For a nonclosed abstract $p$-subgroup, first take its closure before considering whether it is pro-$p$.

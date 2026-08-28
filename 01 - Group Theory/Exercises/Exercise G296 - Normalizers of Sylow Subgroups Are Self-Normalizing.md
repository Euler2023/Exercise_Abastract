---
title: "Exercise G296: Normalizers of Sylow Subgroups Are Self-Normalizing"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - sylow-theory
  - normalizers
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 23, printed p. 77, PDF p. 92"
created: 2026-08-28
---

# Exercise G296: Normalizers of Sylow Subgroups Are Self-Normalizing

## Problem Statement

> [!question] Exercise 23
> Let $P,P'$ be Sylow $p$-subgroups of a finite group $G$.
>
> (a) If $P'\subseteq N_G(P)$, prove that $P'=P$.
>
> (b) If $N_G(P')=N_G(P)$, prove that $P'=P$.
>
> (c) Prove that $N_G(N_G(P))=N_G(P)$.

## Hints

> [!hint]- Hint 1
> Inside $N_G(P)$, the subgroup $P$ is a normal Sylow $p$-subgroup and hence is unique.

## Solution

> [!success]- Solution
> **(a)** Both $P$ and $P'$ are Sylow $p$-subgroups of $N_G(P)$: their orders already contain the full $p$-part of $|G|$. Since $P\trianglelefteq N_G(P)$, it is the unique Sylow $p$-subgroup there. Thus $P'=P$.
>
> **(b)** Put $N=N_G(P)=N_G(P')$. Both $P$ and $P'$ are normal Sylow $p$-subgroups of $N$, so uniqueness gives $P=P'$.
>
> **(c)** If $x\in N_G(N_G(P))$, then $xPx^{-1}\subseteq N_G(P)$ and is a Sylow $p$-subgroup of $G$. Applying (a) to $P'=xPx^{-1}$ gives $xPx^{-1}=P$, so $x\in N_G(P)$. The reverse inclusion is automatic, hence $N_G(N_G(P))=N_G(P)$.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Method boundary:** Part (a) uses uniqueness of a normal Sylow subgroup inside the normalizer, not uniqueness in all of $G$.
- **Source status:** [S2, Ch. I, Ex. 23, printed p. 77, PDF p. 92]. The proof is independently derived.


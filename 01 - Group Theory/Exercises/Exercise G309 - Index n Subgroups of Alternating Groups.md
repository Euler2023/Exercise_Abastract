---
title: "Exercise G309: Index n Subgroups of Alternating Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - alternating-groups
  - automorphisms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 40, printed p. 79, PDF p. 94"
created: 2026-08-28
---

# Exercise G309: Index n Subgroups of Alternating Groups

## Problem Statement

> [!question] Exercise 40
> For $j=1,\ldots,n$, let $H_j\le A_n$ be the stabilizer of $j$, so $H_j\cong A_{n-1}$ and $[A_n:H_j]=n$ for $n\ge3$. Let $H\le A_n$ have index $n$.
>
> (a) Show that left translation on $A_n/H$ identifies $A_n$ with the alternating group on that $n$-element coset set.
>
> (b) Show that an automorphism of $A_n$ maps $H_1$ onto $H$, and that such an automorphism is induced by conjugation in $S_n$ if and only if $H=H_i$ for some $i$.

## Hints

> [!hint]- Hint 1
> The kernel of the coset action is the core of $H$. Treat $n=3,4$ directly and use simplicity of $A_n$ for $n\ge5$.

## Solution

> [!success]- Solution
> Let $\rho:A_n\to\operatorname{Sym}(A_n/H)\cong S_n$ be the coset action. Its kernel is the core $K=\bigcap_{g\in A_n}gHg^{-1}$. For $n\ge5$, simplicity of $A_n$ and nontriviality of the action give $K=1$. For $n=4$, the only possible nontrivial proper normal subgroup is the Klein four group, which cannot lie in $H$ because $|H|=3$; hence again $K=1$. For $n=3$, $H=1$ directly. Thus $\rho$ is injective. Its image has order $n!/2$, so it is the unique index-$2$ subgroup of $S_n$, namely the alternating group on $A_n/H$. This proves (a).
>
> Choose a bijection $b:A_n/H\to\{1,\ldots,n\}$ carrying the base coset $H$ to $1$. Transporting the action in (a) through $b$ gives an automorphism $\alpha$ of $A_n$. The stabilizer of $1$ is $H_1$, while the stabilizer of the base coset before transport is $H$, so, after replacing $\alpha$ by its inverse if necessary, $\alpha(H_1)=H$.
>
> If $\alpha$ is induced by conjugation by $s\in S_n$, then
>
> $$
> \alpha(H_1)=sH_1s^{-1}=H_{s(1)},
> $$
>
> so $H=H_i$ for some $i$. Conversely, if $H=H_i$, conjugation by any $s\in S_n$ satisfying $s(1)=i$ maps $H_1$ to $H_i$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Imported result:** Simplicity of $A_n$ for $n\ge5$ and the normal-subgroup classification of $A_4$ are used explicitly.
- **Source status:** [S2, Ch. I, Ex. 40, printed p. 79, PDF p. 94]. The proof is independently derived.


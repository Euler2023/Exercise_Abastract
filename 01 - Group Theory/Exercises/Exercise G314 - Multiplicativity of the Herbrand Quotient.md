---
title: "Exercise G314: Multiplicativity of the Herbrand Quotient"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - cyclic-groups
  - herbrand-quotient
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 45, printed pp. 79-80, PDF pp. 94-95"
created: 2026-08-28
---

# Exercise G314: Multiplicativity of the Herbrand Quotient

## Problem Statement

> [!question] Exercise 45
> Let $G=\langle\sigma\rangle$ be cyclic of order $n$ and act on an abelian group $A$. Define endomorphisms
>
> $$
> f(x)=\sigma x-x,
> \qquad
> g(x)=x+\sigma x+\cdots+\sigma^{n-1}x.
> $$
>
> Since $fg=gf=0$, define
>
> $$
> q(A)=\frac{(A_f:A^g)}{(A_g:A^f)}
> $$
>
> when both indices are finite. Let $B\le A$ satisfy $GB\subseteq B$.
>
> (a) Define the natural $G$-action on $A/B$.
>
> (b) Prove $q(A)=q(B)q(A/B)$, with the stated finiteness convention.
>
> (c) If $A$ is finite, show that $q(A)=1$.

## Hints

> [!hint]- Hint 1
> Regard $A_f/A^g$ and $A_g/A^f$ as the two cohomology groups of the periodic complex alternating $f$ and $g$.

## Solution

> [!success]- Solution
> **(a)** Define $\sigma(a+B)=\sigma a+B$. This is well defined because $B$ is $G$-stable, and it extends to the required $G$-action.
>
> **(b)** Put
>
> $$
> H^0(A)=A_f/A^g,
> \qquad
> H^1(A)=A_g/A^f.
> $$
>
> The identities $fg=gf=0$ make these the cohomology groups of the two-periodic complex
>
> $$
> \cdots\xrightarrow{g}A\xrightarrow{f}A\xrightarrow{g}A\xrightarrow{f}A\xrightarrow{g}\cdots.
> $$
>
> The short exact sequence $0\to B\to A\to A/B\to0$ of $G$-groups yields, by the kernel-cokernel construction, the two-periodic long exact sequence
>
> $$
> \cdots\to H^0(B)\to H^0(A)\to H^0(A/B)
> \to H^1(B)\to H^1(A)\to H^1(A/B)\to\cdots.
> $$
>
> If the two cohomology groups for any two of the three modules are finite, exactness makes those for the third finite. Taking the alternating product of the orders in one period gives
>
> $$
> \frac{|H^0(A)|}{|H^1(A)|}
> =\frac{|H^0(B)|}{|H^1(B)|}
> \frac{|H^0(A/B)|}{|H^1(A/B)|},
> $$
>
> which is $q(A)=q(B)q(A/B)$.
>
> **(c)** If $A$ is finite, then for each endomorphism $u$ of $A$, $|\ker u|\,|\operatorname{im}u|=|A|$. Hence
>
> $$
> q(A)=\frac{|A_f|/|A^g|}{|A_g|/|A^f|}
> =\frac{|A_f||A^f|}{|A_g||A^g|}
> =\frac{|A|}{|A|}=1.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[01 - Group Theory/Exercises/Exercise G313 - Index Formula for an Abelian Homomorphism|Exercise G313]]

## Notes

- **Method boundary:** The long exact sequence is the elementary kernel-cokernel sequence of the displayed periodic complexes; it is also the degree-$0/1$ Tate cohomology sequence for a finite cyclic group.
- **Source status:** The exercise and both indices in $q(A)$ were visually checked at [S2, Ch. I, Ex. 45, printed pp. 79-80, PDF pp. 94-95]. The derivation is independent.

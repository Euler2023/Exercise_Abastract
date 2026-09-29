---
title: "Exercise LA512: Cohomology of a Finite Cyclic Group"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 16, printed p. 830, PDF p. 845"
created: 2026-09-29
---

# Exercise LA512: Cohomology of a Finite Cyclic Group

## Problem Statement

> [!question] Lang XX.16 — Cyclic groups
> Let $G$ be a finite cyclic group of order $n$. Let $\sigma$ be a generator of $G$. Let $K^i=\mathbb Z[G]$ for $i\ge0$. Let $\varepsilon:K^0\to\mathbb Z$ be the augmentation as before. For $i$ odd $\ge1$, let $d^i:K^i\to K^{i-1}$ be multiplication by $1-\sigma$. For $i$ even $\ge2$, let $d^i$ be multiplication by $1+\sigma+\cdots+\sigma^{n-1}$. Prove that $K$ is a resolution of $\mathbb Z$. Conclude that:
>
> For $i$ odd:
> $$
> H^i(G,A)=A^G/T_GA,\qquad
> T_G:a\longmapsto(1+\sigma+\cdots+\sigma^{n-1})a;
> $$
> For $i$ even $\ge2$:
> $$
> H^i(G,A)=A_T/(1-\sigma)A,
> $$
> where $A_T$ is the kernel of $T_G$ in $A$.

> [!warning] Source issue: the positive-degree formulas have their parities reversed
> The displayed resolution yields
> $$
> H^{2r+1}(G,A)=\ker T_G/(1-\sigma)A\quad(r\ge0),\qquad
> H^{2r}(G,A)=A^G/T_GA\quad(r\ge1).
> $$
> For example, if $n>1$ and $A=\mathbb Z$ has trivial action, $H^1(G,\mathbb Z)=\operatorname{Hom}(G,\mathbb Z)=0$, whereas the printed odd-degree formula would give $\mathbb Z/n\mathbb Z$.

## Hints

> [!hint]- Hint 1: Compute kernels in the group ring
> Multiplication by $1-\sigma$ kills exactly the multiples of $N=1+\sigma+\cdots+\sigma^{n-1}$. Multiplication by $N$ is augmentation followed by multiplication by $N$.

> [!hint]- Hint 2: Write the cochain sequence from degree zero
> Applying $\operatorname{Hom}_G(-,A)$ gives $A\xrightarrow{1-\sigma}A\xrightarrow{T_G}A\xrightarrow{1-\sigma}A\to\cdots$. The first positive cohomology is therefore at the middle $A$ displayed here.

## Solution

> [!success]- Independent resolution and corrected cohomology calculation
> Let $R=\mathbb Z[G]$ and $N=\sum_{j=0}^{n-1}\sigma^j$. Since $\sigma^n=1$,
> $$
> (1-\sigma)N=N(1-\sigma)=0,\qquad
> \varepsilon(1-\sigma)=0.
> $$
> Thus the proposed maps form an augmented complex.
>
> Write $v=\sum_{j=0}^{n-1}a_j\sigma^j$. The coefficient of $\sigma^j$ in $(1-\sigma)v$ is $a_j-a_{j-1}$, with indices read modulo $n$. It vanishes for all $j$ exactly when all coefficients agree. Hence
> $$
> \ker(1-\sigma:R\to R)=\mathbb ZN=\operatorname{im}(N:R\to R).
> $$
> Also $Nv=\varepsilon(v)N$. The element $N$ has infinite additive order, so $\ker N=\ker\varepsilon=I_G$. This ideal equals $(1-\sigma)R$: it is generated additively by the elements $\sigma^j-1$, and each of these is divisible by $\sigma-1$. Thus
> $$
> \ker(N:R\to R)=(1-\sigma)R.
> $$
> These identities prove exactness at every copy of $R$, and the augmentation is surjective. The result is a free resolution of $\mathbb Z$.
>
> Identify $\operatorname{Hom}_R(R,A)$ with $A$ by evaluation at $1$. Precomposing with multiplication by $1-\sigma$ sends $a$ to $(1-\sigma)a$, and precomposing with multiplication by $N$ sends $a$ to $Na=T_Ga$. The resulting cochain complex is
> $$
> 0\longrightarrow A\xrightarrow{1-\sigma}A
> \xrightarrow{T_G}A\xrightarrow{1-\sigma}A
> \xrightarrow{T_G}A\longrightarrow\cdots.
> $$
> Consequently $H^0(G,A)=\ker(1-\sigma)=A^G$, while
> $$
> H^{2r+1}(G,A)=\frac{\ker T_G}{(1-\sigma)A}\quad(r\ge0),
> \qquad
> H^{2r}(G,A)=\frac{A^G}{T_GA}\quad(r\ge1).
> $$
> The relation $N(1-\sigma)=0$ ensures that the first quotient is defined, and $(1-\sigma)N=0$ ensures that the second is defined. These are the corrected formulas.
>
> For the trivial group $n=1$, $1-\sigma=0$ and $N=1$, so both positive-degree formulas are zero, as they should be.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group rings]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 16, printed p. 830, PDF p. 845]. Both printed parity labels are retained before the warning.
- Proof status: independent kernel calculation and application of the definition of group cohomology by a free resolution.
- The source uses upper indices for a resolution whose differential lowers degree; the proof keeps its maps but distinguishes the resulting ascending cochain complex.
- This computation requires no division by $n$ in the coefficient module.


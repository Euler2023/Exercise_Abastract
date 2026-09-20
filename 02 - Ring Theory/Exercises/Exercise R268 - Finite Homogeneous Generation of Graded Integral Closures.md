---
title: "Exercise R268: Finite Homogeneous Generation of Graded Integral Closures"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - commutative-algebra
  - graded-rings
  - finite-generation
  - integrally-closed
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises, Exercise 7, printed p. 410, PDF p. 425"
created: 2026-09-15
---

# Exercise R268: Finite Homogeneous Generation of Graded Integral Closures

## Problem Statement

> [!question]
> **Shared setup for Exercises 5–9.** Let $R=k[x]=k[X]/\mathfrak{p}$, where $\mathfrak{p}$ is a homogeneous prime ideal. Thus $(x)$ is a homogeneous generic point of a $k$-variety. Let $K=k(x)=\operatorname{Frac}(R)$ and let $I$ be the integral closure of $R$ in $K$. Assume, as in the source, that $K/k$ is a regular extension.
>
> We let $R_m$ denote the set of elements of $R$ which are homogeneous of degree $m$. Similarly for $I_m$. We note that $R_m$ and $I_m$ are vector spaces over $k$, and that $R$ (resp. $I$) is the direct sum of all spaces $R_m$ (resp. $I_m$) for $m = 0, 1, \ldots$ This is obvious for $R$, and it is true for $I$ because of Exercise 6.
> 
> Prove that $I$ can be written as a sum $I = R z_1 + \cdots + R z_s$, where each $z_i$ is homogeneous of some degree $d_i$.

## Hints

> [!hint]- Hint 1
> $R = k[x_1, \ldots, x_n]$ is a finitely generated domain over the field $k$, and $k(x)$ is a finitely generated field extension of $k$.
> 
> Recall the finite-normalization theorem posed in Chapter VIII, Exercise 7, with an independently supplied solution in [[02 - Ring Theory/Exercises/Exercise R261 - Finite Generation of Integral Closures over Affine Domains|Exercise R261]]: the integral closure of an affine domain in a finite extension of its fraction field is a finite module over that domain. Apply it to the degree-one extension $K/K$.

> [!hint]- Hint 2
> Let $w_1, \ldots, w_r$ be a finite set of $R$-module generators of $I$.
> 
> By Exercise 6, each generator $w_j$ can be decomposed into a finite sum of homogeneous elements lying in $I$. What happens if you take the collection of all these homogeneous components?

## Solution

> [!success]- Solution
> Let $R = k[x_1, \ldots, x_n] = k[X]/\mathfrak{p}$ be the coordinate ring of the homogeneous affine variety in the shared setup.
> The ring $R$ is a graded integral domain:
> $$
> R = \bigoplus_{m=0}^\infty R_m.
> $$
> The field of fractions $K = k(x) = \operatorname{Frac}(R)$ is a finitely generated field extension of $k$.
> By hypothesis, $k(x)$ is a regular extension of $k$ (which in particular implies $k(x)$ is separable over $k$).
> Let $I$ be the integral closure of $R$ in $k(x)$.
>
> By Exercise 6, every element $f \in I$ has a unique decomposition $f = \sum_{m \ge 0} f_m$ into homogeneous elements $f_m \in I_m$.
> Therefore, $I$ is a graded ring and a graded $R$-module:
> $$
> I = \bigoplus_{m=0}^\infty I_m, \qquad I_m = I \cap k(x)_m.
> $$
>
> ### Step 1: Finite Generation of $I$ over $R$
>
> We use the finite-normalization result posed as Chapter VIII, Exercise 7 [S2, printed p. 375, PDF p. 390], with a proof supplied independently in [[02 - Ring Theory/Exercises/Exercise R261 - Finite Generation of Integral Closures over Affine Domains|Exercise R261]]. It states that the integral closure of an affine domain over a field in a finite extension of its fraction field is a finite module over that domain. Here $R$ is an affine domain and the extension is $K/K$, of degree one. Thus $I$ is a finitely generated $R$-module.
>
> Thus, there exists a finite set of generators $\{w_1, \ldots, w_r\} \subset I$ such that
> $$
> I = R w_1 + R w_2 + \cdots + R w_r.
> $$
>
> ### Step 2: Extracting Homogeneous Generators
>
> The generators $w_1, \ldots, w_r$ are not necessarily homogeneous.
> However, by Exercise 6, each element $w_j \in I$ can be written uniquely as a finite sum of its homogeneous components:
> $$
> w_j = \sum_{l = 0}^{N_j} w_{j, l},
> $$
> where each component $w_{j, l}$ is homogeneous of degree $l$, and crucially:
> $$
> w_{j, l} \in I \quad \text{for all } j \in \{1, \ldots, r\} \text{ and } 0 \le l \le N_j.
> $$
>
> Now collect all the non-zero homogeneous components of all the generators $w_j$ into a single finite set:
> $$
> \{z_1, z_2, \ldots, z_s\} = \bigcup_{j=1}^r \{w_{j, l} : 0 \le l \le N_j, \, w_{j, l} \neq 0\} \subset I.
> $$
> By construction:
> 1. Each $z_i$ is homogeneous of some degree $d_i \ge 0$.
> 2. Each $z_i$ lies in $I$.
> 3. The set $\{z_1, \ldots, z_s\}$ is finite, with $s \le \sum_{j=1}^r (N_j + 1)$.
>
> Furthermore, since each original generator $w_j$ is a sum of some of the elements $z_i$, we have
> $$
> w_j \in \sum_{i=1}^s R z_i \quad \text{for each } j = 1, \ldots, r.
> $$
> Since $\{w_1, \ldots, w_r\}$ generates $I$ as an $R$-module, it follows that
> $$
> I = \sum_{j=1}^r R w_j \subseteq \sum_{i=1}^s R z_i.
> $$
> Conversely, since each $z_i \in I$ and $I$ is an $R$-module, we have $\sum_{i=1}^s R z_i \subseteq I$.
>
> Therefore,
> $$
> I = R z_1 + R z_2 + \cdots + R z_s,
> $$
> where each $z_i \in I$ is homogeneous of degree $d_i$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras|Filtered and Graded Algebras]]
- [[02 - Ring Theory/Exercises/Exercise R261 - Finite Generation of Integral Closures over Affine Domains|Exercise R261 (Finite Generation of Integral Closures)]]
- [[02 - Ring Theory/Exercises/Exercise R267 - Homogeneous Decomposition in Graded Integral Closures|Exercise R267 (Homogeneous Decomposition)]]

## Notes

- **Independent derivation and source scope:** The shared setup and Exercise 7 are checked at [S2, Ch. IX, printed p. 410, PDF p. 425]. The proof combines the finite-normalization input of VIII.7 with the homogeneous decomposition established in IX.6; neither assigned exercise is described as a proof printed in Lang's exercise list.
- **Graded module structure:** As a consequence, for any degree $m$, the degree $m$ piece is given by:
  $$
  I_m = \sum_{i=1}^s R_{m - d_i} z_i,
  $$
  where $R_j = 0$ for $j < 0$. This formula is the key input for Exercises 8 and 9.

---
title: "Exercise R292: Odd Degree Forms over a Real Closed Field"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - real-closed-fields
  - projective-intersections
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercises, Exercise 13, printed p. 463, PDF p. 478"
created: 2026-09-25
---

# Exercise R292: Odd Degree Forms over a Real Closed Field

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 13
> Let $R$ be a real closed field. Let $f_1,\ldots,f_r$ be homogeneous polynomials of odd degrees in $n$ variables over $R$. If $n>r$, show that these polynomials have a non-trivial common zero in $R$.
>
> (Comments: If the forms are generic (in the sense of Chapter IX), and $n=r+1$, it is a theorem of Bezout that in the algebraic closure $R^a$ the forms have exactly $d_1\cdots d_m$ common zeros, where $d_i$ is the degree of $f_i$. You may assume this to prove the result as stated. If you want to see this worked out, see [La 53], Theorem 15. Compare with Exercise 3 of Chapter IX.)

> [!warning] Source issue: index and projective counting
> The printed comment uses $d_m$ although only $f_1,\ldots,f_r$ have been introduced; the intended product is $d_1\cdots d_r$. Its finite count must concern **projective** common zeros, counted with intersection multiplicity (or distinct points for a transverse generic system): any nonzero affine zero has infinitely many scalar multiples over the infinite field $R^a$. The problem statement above preserves the printed wording.

## Hints

> [!hint]- Hint 1: Reduce the number of variables
> When $n>r+1$, restrict the forms to an $(r+1)$-dimensional coordinate subspace. A zero polynomial after restriction imposes no extra constraint.

> [!hint]- Hint 2: Work with a generic nearby system
> Add algebraically independent infinitesimal coefficients to every monomial of each prescribed odd degree. The perturbed forms are generic over $R$ while their coefficients have the original forms as residues.

> [!hint]- Hint 3: Count and specialize
> Generic Bézout gives an odd number of complex projective intersections. Conjugation has a fixed point. Normalize a real representative so one coordinate is $1$ and all coordinates are bounded, then reduce them to $R$.

## Solution

> [!success]- Solution
> **Step 1: reduction to $n=r+1$.** If $n>r+1$, set $X_{r+2}=\cdots=X_n=0$. The restricted $r$ polynomials in $r+1$ variables remain homogeneous of their assigned odd degrees; an identically zero restriction merely imposes no condition. A nonzero common zero of the restrictions extends by zero coordinates to one in $R^n$. We may therefore assume $n=r+1$.
>
> **Step 2: a generic infinitesimal perturbation.** For each form $f_i$ of odd degree $d_i$, introduce a distinct indeterminate $t_{i,\alpha}$ for every degree-$d_i$ monomial $X^\alpha$ and set
>
> $$
> F_i(X)=f_i(X)+\sum_{|\alpha|=d_i}t_{i,\alpha}X^\alpha.
> $$
>
> Let $E=R(t_{i,\alpha})$. Order the finitely generated rational function field $E$ lexicographically so that every $t_{i,\alpha}$ is positive and infinitesimal over $R$, and let $L$ be an order-preserving real closure of $E$. As in Exercise 12, the canonical place of $E$ over $R$ has residue field $R$; Exercise 7 shows that its extension to $L$ still has residue field $R$. Write $\mathcal O$ for that valuation ring and $\rho:\mathcal O\to R$ for reduction. In particular, $\rho(t_{i,\alpha})=0$.
>
> The coefficients of all the $F_i$ are algebraically independent over $R$: adding the fixed coefficients of $f_i$ to the indeterminates does not create a polynomial relation. We invoke the generic projective Bézout theorem allowed in the exercise comment: for generic forms of degrees $d_1,\ldots,d_r$ in $r+1$ variables, their common zero set in $\mathbb P^r(L(\sqrt{-1}))$ consists of $D=d_1\cdots d_r$ transverse points. The same conclusion needed here follows if Bézout counts intersection multiplicities, since conjugation preserves those multiplicities. As every $d_i$ is odd, $D$ is odd.
>
> The algebraic closure of the real closed field $L$ is $L(\sqrt{-1})$ by Lang's Theorem 2.2. Complex conjugation permutes the $D$ projective intersection points. Nonfixed points occur in pairs, so at least one point $P$ is fixed. A conjugation-fixed projective point has a representative in $L^{r+1}$: divide its homogeneous coordinates by any nonzero coordinate, making that coordinate $1$; all resulting coordinate ratios are fixed by conjugation and hence lie in $L$. Let $x=(x_1,\ldots,x_{r+1})\in L^{r+1}\setminus\{0\}$ represent $P$.
>
> **Step 3: take the residue of the point.** Choose $j$ with $|x_j|=\max_k|x_k|$ and replace $x$ by $x/x_j$. Then $x_j=1$ and $|x_k|\le1$ for every $k$, so all coordinates lie in $\mathcal O$. Reducing coordinatewise gives $\bar x=(\rho(x_1),\ldots,\rho(x_{r+1}))\in R^{r+1}$ with $\bar x_j=1$, hence $\bar x\ne0$. Each perturbation term $t_{i,\alpha}x^\alpha$ is infinitesimal, and $F_i(x)=0$. Applying $\rho$ therefore gives
>
> $$
> f_i(\bar x)=\rho(F_i(x))=0\qquad(1\le i\le r).
> $$
>
> Thus $\bar x$ is the required nontrivial common zero over the original real closed field $R$.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real Places and Archimedean Valuation Rings]]
- [[02 - Ring Theory/Concepts/Multivariate Resultants and Resultant Systems|Multivariate Resultants and Resultant Systems]]
- [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz|Hilbert Nullstellensatz]]

## Notes

- **Routing:** Ring Theory is primary because the proof counts intersections of homogeneous polynomial equations and specializes a generic polynomial system; real closedness supplies the conjugation and residue steps.
- **Source and proof status:** [S2, Ch. XI, Exercise 13, printed p. 463, PDF p. 478]. The argument after the generic count is independently derived. The source explicitly permits the generic Bézout count as an **external standard input**; its projective and multiplicity interpretation, together with generic transversality, is stated precisely above. The source cites [La 53], Theorem 15, for a worked-out route; that paper has not been independently checked here.
- **Method boundary:** Ordinary Euclidean compactness of a unit sphere would cover $R=\mathbb R$ but not an arbitrary nonarchimedean real closed $R$. The infinitesimal place performs the necessary specialization without that assumption. The place construction uses [[03 - Field Theory/Exercises/Exercise F106 - Real Closed Extensions with Large Transcendence Degree|Exercise F106]].

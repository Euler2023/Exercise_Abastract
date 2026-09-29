---
title: "Exercise LA502: Low Degree Group Cohomology"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 4, printed pp. 826–827, PDF pp. 841–842"
created: 2026-09-29
---

# Exercise LA502: Low Degree Group Cohomology

## Problem Statement

> [!question] Lang XX.4
> If $A$ is a $G$-module, let $A^G$ be the submodule consisting of all elements $v\in A$ such that $xv=v$ for all $x\in G$. Thus $A^G$ has trivial $G$-action. (This notation is convenient, but is not the same as for the induced module of Chapter XVIII.)
>
> (a) Show that if $H^q(G,A)$ denotes the $q$-th homology of the complex $\operatorname{Hom}_G(E,A)$, then $H^0(G,A)=A^G$. Thus the left derived functors of $A\mapsto A^G$ are the homology groups of the complex $\operatorname{Hom}_G(E,A)$, or for that matter, of the complex $\operatorname{Hom}(F,A)$, where $F$ is as in Exercise 3.
>
> (b) Show that the group of $1$-cycles $Z^1(G,A)$ consists of those functions $f:G\to A$ satisfying
> $$
> f(x)+xf(y)=f(xy)\quad\text{for all }x,y\in G.
> $$
> Show that the subgroup of coboundaries $B^1(G,A)$ consists of those functions $f$ for which there exists an element $a\in A$ such that $f(x)=xa-a$. The factor group is then $H^1(G,A)$. See Chapter VI, §10 for the determination of a special case.
>
> (c) Show that the group of $2$-cocycles $Z^2(G,A)$ consists of those functions $f:G\to A$ satisfying
> $$
> xf(y,z)-f(xy,z)+f(x,yz)-f(x,y)=0.
> $$
> Such $2$-cocycles are also called factor sets, and they can be used to describe isomorphism classes of group extensions, as follows.

> [!warning] Source issues: derived direction and the domain of a two-cochain
> In (a), these are the **right** derived functors of the covariant left exact invariants functor; compare the explicit definition in §6, printed p. 791, PDF p. 806. The same mistaken word “left” also occurs in the group-cohomology example on printed p. 792. The Hom from $F$ is $\operatorname{Hom}_{\mathbb Z[G]}(F,A)$.
>
> In (c), the domain must be $G\times G$, as the four displayed terms require two arguments. The solution uses the corrected differential of Exercise 3.

## Hints

> [!hint]- Hint 1: Evaluate a module homomorphism on the free basis
> A homomorphism $F_q\to A$ is specified by an arbitrary function $G^q\to A$. Obtain its coboundary by composing with $d_{q+1}$.

> [!hint]- Hint 2: Write the first two coboundary operators
> Compute $\delta a(x)=xa-a$ and $\delta f(x,y)=xf(y)-f(xy)+f(x)$. For the derived-functor assertion, check exactness on injective coefficient modules.

## Solution

> [!success]- Independent calculation with the bar resolution
> Let $R=\mathbb Z[G]$. The corrected bar resolution has $F_q$ free over $R$ on $[x_1|\cdots|x_q]$, including one empty basis vector in degree $0$. Consequently
> $$
> C^q(G,A)=\operatorname{Hom}_R(F_q,A)\cong\operatorname{Map}(G^q,A),
> \qquad C^0(G,A)=A.
> $$
> Composing with the bar boundary gives
> $$
> \begin{aligned}
> (\delta f)(x_1,\ldots,x_{q+1})
> ={}&x_1f(x_2,\ldots,x_{q+1})\\
> &+\sum_{j=1}^{q}(-1)^j f(x_1,\ldots,x_jx_{j+1},\ldots,x_{q+1})\\
> &+(-1)^{q+1}f(x_1,\ldots,x_q).
> \end{aligned}
> $$
> Since $d^2=0$, we have $\delta^2=0$.
>
> **(a).** In degree zero, $(\delta a)(x)=xa-a$. There is no incoming coboundary, so
> $$
> H^0(G,A)=\ker(\delta:C^0\to C^1)=A^G.
> $$
> The homogeneous and inhomogeneous resolutions are isomorphic, so their Hom complexes have the same cohomology.
>
> To identify the derived functors, note first that each $F_q$ is free, so a short exact sequence of coefficients gives a degreewise short exact sequence of cochain complexes and hence its long exact cohomology sequence. If $I$ is an injective $R$-module and $q>0$, a cocycle $f:F_q\to I$ vanishes on $\operatorname{im}d_{q+1}=\ker d_q$. It therefore factors through $\operatorname{im}d_q\subset F_{q-1}$. Injectivity extends the resulting map to $F_{q-1}$, showing that $f$ is a coboundary. Hence $H^q(G,I)=0$ for $q>0$.
>
> These facts identify this cohomology with the right derived functors of $A\mapsto A^G$: the degree-zero functors agree, and the cohomology functor is effaceable in positive degrees by embedding coefficients into injectives. The uniqueness theorem for effaceable delta-functors then gives the natural identification. This is also $\operatorname{Ext}^q_R(\mathbb Z,A)$, since $\operatorname{Hom}_R(\mathbb Z,A)=A^G$.
>
> **(b).** For a one-cochain $f:G\to A$,
> $$
> (\delta f)(x,y)=xf(y)-f(xy)+f(x).
> $$
> Thus being a cocycle is exactly the displayed crossed-homomorphism identity. The degree-zero calculation shows that the one-coboundaries are exactly $f(x)=xa-a$. Their quotient is $H^1(G,A)$.
>
> **(c).** A two-cochain is a function $f:G^2\to A$. The general formula gives
> $$
> (\delta f)(x,y,z)=xf(y,z)-f(xy,z)+f(x,yz)-f(x,y).
> $$
> Its vanishing is precisely the asserted factor-set condition, with the corrected domain. There is no need to assume the action on $A$ trivial.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[04 - Linear Algebra and Modules/Concepts/Derived Functors and Ext|Derived functors and Ext]]
- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion|Injective modules]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 4, printed pp. 826–827, PDF pp. 841–842]. All three parts and the paragraph introducing factor sets are retained.
- Proof status: independent derivation of the cochain formulas. The named general input for identifying derived functors is Lang's universality theorem [Ch. XX, Theorem 7.1, printed p. 801, PDF p. 816], whose statement was checked on the original page.
- The group may be infinite. Cochains are all functions, so the underlying cochain modules are products rather than finite-support direct sums.
- “Homology” in the source refers here to the cohomology of an ascending cochain complex.


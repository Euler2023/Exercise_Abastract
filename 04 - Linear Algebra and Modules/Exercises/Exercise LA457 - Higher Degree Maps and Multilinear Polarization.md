---
title: "Exercise LA457: Higher Degree Maps and Multilinear Polarization"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - polynomial-maps
  - polarization
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 15, printed p. 598, PDF p. 613"
created: 2026-09-29
---

# Exercise LA457: Higher Degree Maps and Multilinear Polarization

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 15
> Define maps of degree $>2$, from one module into another.
>
> **Printed hint:** For degree $3$, consider the expression
>
> $$
> f(x+y+z)-f(x+y)-f(x+z)-f(y+z)+f(x)+f(y)+f(z).
> $$
>
> Generalize the statement proved for quadratic maps to these higher-degree maps, i.e. the uniqueness of the various multilinear maps entering into their definitions.

> [!note] Hypotheses for the requested generalization
> The source asks for a definition and a uniqueness theorem without specifying higher-degree torsion assumptions. The construction below extends Lang's symmetric-bilinear definition: the target has no $d!$-torsion for uniqueness through degree $d$. If multiplication by $d!$ is bijective, the polarization formulas additionally allow division by the required factorials. Without such conditions, uniqueness can fail.

## Hints

> [!hint]- Hint 1
> Replace the symmetric bilinear diagonal $B(x,x)$ by a sum of diagonals of symmetric $j$-multilinear maps, for $1\le j\le d$.

> [!hint]- Hint 2
> In the inclusion-exclusion sum over subsets of $\{1,\ldots,d\}$, a term cancels unless every variable occurs. For a degree-$d$ diagonal, exactly $d!$ terms survive. Recover the highest multilinear map first and then subtract its diagonal.

## Solution

> [!success]- Independent definition and proof with explicit torsion assumptions
> **Definition.** Let $R$ be a commutative ring, let $E,F$ be $R$-modules, and let $d\ge1$. Call a map $f:E\to F$ a normalized polynomial map of degree at most $d$ in the symmetric-multilinear sense if
>
> $$
> f(x)=\sum_{j=1}^{d}B_j(x,\ldots,x),
> $$
>
> where $B_j:E^j\to F$ is symmetric and $R$-multilinear. “Normalized” means $f(0)=0$, in agreement with Lang's quadratic convention. Constants can be admitted separately by writing $f(x)=f(0)+\sum_jB_j(x,\ldots,x)$. A homogeneous degree-$j$ map is a single diagonal $B_j(x,\ldots,x)$ and satisfies $f(rx)=r^jf(x)$ for every $r\in R$.
>
> **The top polarization formula.** For any normalized map define
>
> $$
> D_df(x_1,\ldots,x_d)
> =\sum_{I\subseteq\{1,\ldots,d\}}(-1)^{d-|I|}
> f\left(\sum_{i\in I}x_i\right).
> $$
>
> Consider the contribution of $B_j(x,\ldots,x)$. Expanding by multilinearity produces a term $B_j(x_{i_1},\ldots,x_{i_j})$ for each ordered $j$-tuple of indices from $I$. If its set of used indices is $J\subseteq\{1,\ldots,d\}$, its total coefficient in $D_d$ is
>
> $$
> \sum_{I\supseteq J}(-1)^{d-|I|}
> =(1-1)^{d-|J|}.
> $$
>
> It is zero unless $J$ contains all $d$ indices. This is impossible when $j<d$. When $j=d$, each index must occur exactly once; there are $d!$ permutations, and symmetry makes all the terms equal. Hence
>
> $$
> D_df(x_1,\ldots,x_d)=d!B_d(x_1,\ldots,x_d).
> $$
>
> This derivation requires no division and holds over every commutative ring.
>
> **Uniqueness.** Assume multiplication by $d!$ on $F$ is injective. If $f$ has two displayed representations, subtract them. Applying $D_d$ gives $d!(B_d-B'_d)=0$ pointwise and therefore $B_d=B'_d$. Subtract this common diagonal and repeat with degree $d-1$. For each $j\le d$, multiplication by $j!$ is injective too: $j!z=0$ would imply $d!z=0$. Descending induction gives $B_j=B'_j$ for every $j$. Thus the highest index with $B_j\ne0$ is a well-defined degree; the zero map has all components zero.
>
> **Explicit recovery when factorials are invertible.** If multiplication by $d!$ is an automorphism of $F$, then multiplication by each $j!$, $j\le d$, is an automorphism as well. Begin with $f_d=f$ and recursively put
>
> $$
> B_j=\frac1{j!}D_jf_j,
> \qquad
> f_{j-1}(x)=f_j(x)-B_j(x,\ldots,x)
> \quad(j=d,d-1,\ldots,1).
> $$
>
> For maps in the defined class, the top formula proves that this recursion recovers their multilinear components. In degree $3$, the printed seven-term expression is $D_3f=6B_3$. Subtracting $B_3(x,x,x)$ leaves a quadratic map, whose second cross-effect is $2B_2$; the remaining function is $B_1$.
>
> **Failure without torsion control.** Take $R=E=F=\mathbb F_3$ and $f(x)=x$. It has one representation with $B_1(x)=x$ and all higher components zero. It has another with $B_3(x,y,z)=xyz$ and all other components zero, since $x^3=x$ for every $x\in\mathbb F_3$. Thus the displayed function does not determine its degree or multilinear components when the factorial acts noninjectively.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Maps and Polarization|Quadratic Maps and Polarization]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA454 - Parallelogram Law and the Scalar Linearity Gap|Exercise LA454]]

## Notes

- **Source and proof status:** The full instruction and cubic hint were checked on [S2, Ch. XV, Ex. 15, printed p. 598, PDF p. 613]. Lang's quadratic definition and its $2$-torsion uniqueness condition were checked on [S2, Ch. XV, §2, Proposition 2.1, printed p. 574, PDF p. 589]. The higher-degree definition, proof, recovery formulas, and counterexample are independently supplied.
- **Definition boundary:** This is one precise extension of the source's convention. Over arbitrary rings, maps defined by vanishing iterated differences or by polynomial laws are different notions; the proof does not identify them with symmetric-multilinear diagonals. In particular, additivity or a finite-difference identity alone does not guarantee $R$-multilinearity.
- **Torsion boundary:** Injectivity of multiplication by $d!$ suffices for uniqueness of an existing representation. Surjectivity is additionally needed for division by $d!$ to be defined on every element of $F$; for an existing representation the required cross-effect values already lie in its image. The source's cubic hint omits the empty-subset term because its maps are normalized at zero.

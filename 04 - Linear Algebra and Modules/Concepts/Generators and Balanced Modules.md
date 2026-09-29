---
title: Generators and Balanced Modules
aliases:
  - Generator Module
  - Balanced Module
  - Morita Generator Criterion
  - Double Centralizer of a Module
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - projective-modules
  - double-centralizers
created: 2026-09-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, §7, Theorem 7.1, printed p. 660, PDF p. 675; Theorem 5.4, printed p. 655, PDF p. 670; Exercise 12, printed p. 662, PDF p. 677"
source_status: verified
status: not-started
---

# Generators and Balanced Modules

## Definition

Let $R$ be a unital ring and $E$ a left $R$-module. Put

$$
S=R'(E)=\operatorname{End}_R(E),\qquad
R''(E)=\operatorname{End}_S(E).
$$

Endomorphism rings have composition as their product. The ring $S$ acts on the left of $E$ by evaluation. Every $s\in S$ satisfies $s(rx)=rs(x)$, so the $S$-action commutes with the original $R$-action. Thus there is a canonical ring homomorphism

$$
\lambda:R\longrightarrow R''(E),\qquad \lambda_r(x)=rx.
$$

> [!info] Balanced module
> The module $E$ is **balanced** when $\lambda$ is an isomorphism. In particular, the action of $R$ must be faithful, and every additive endomorphism of $E$ commuting with all $R$-endomorphisms must be multiplication by a unique element of $R$.

> [!info] Generator
> The module $E$ is a **generator for left $R$-modules** when every left $R$-module is a quotient of a possibly infinite direct sum of copies of $E$.

The adjective balanced here concerns a double-centralizer property of a module. It is different from an $R$-balanced map used to define a tensor product.

## Interpretation

A generator has enough elements and enough maps to produce every other module through sums and quotients. It suffices to produce the regular module $R$, because free modules are direct sums of copies of $R$ and every module is a quotient of a free one.

The first endomorphism ring $S$ records transformations that preserve the $R$-module structure. The second endomorphism ring records transformations that preserve all of those transformations. Balancedness says that this second step recovers precisely the original ring action, including faithfulness.

## Key Properties

### A finite surjection characterizes generators

The following are equivalent:

1. $E$ is a generator.
2. There is a surjection $E^{(n)}\twoheadrightarrow R$ for some finite $n$.
3. The regular module $R$ is a direct summand of some finite direct sum $E^{(n)}$.

For the first implication, a preimage of $1$ under a surjection from any direct sum has finite support. The corresponding finite restriction already surjects onto $R$. The resulting surjection splits because $R$ is free: if $z$ maps to $1$, then $r\mapsto rz$ is a section. Conversely, a surjection onto $R$ can be summed to obtain surjections onto free modules, then composed with free presentations of arbitrary modules.

In particular, every generator is faithful: an element of $R$ that annihilates $E$ also annihilates a finite direct sum $E^{(n)}$ and its quotient $R$, and is therefore zero.

### Morita's generator criterion

> [!theorem] Morita's criterion
> A left $R$-module $E$ is a generator if and only if it is balanced and is finitely generated projective as a **left $S=\operatorname{End}_R(E)$-module**.

For the forward direction, split $E^{(n)}\cong R\oplus F$. The module $R\oplus F$ is balanced: a member of its double centralizer commutes with the coordinate projections, right multiplications on the $R$-coordinate, and the maps $(x,v)\mapsto(0,xw)$ for $w\in F$. These force the same left multiplication on both coordinates. A diagonal operator from $R''(E)$ then shows that $E$ is balanced. Applying $\operatorname{Hom}_R(-,E)$ to the decomposition gives an isomorphism of left $S$-modules

$$
S^{(n)}\cong E\oplus\operatorname{Hom}_R(F,E),
$$

so $E$ is finite projective over $S$.

For the reverse direction, a finite projective left $S$-module has a dual basis: there are $e_i\in E$ and $S$-linear maps $f_i:E\to S$ with

$$
y=\sum_i f_i(y)e_i.
$$

For each $x\in E$, the formula $y\mapsto f_i(y)x$ defines an $S$-linear endomorphism of $E$. Balancedness identifies it with multiplication by a unique element $g_i(x)\in R$. Since each $f_i(y)$ is an $R$-linear operator, $g_i(rx)=r g_i(x)$. The dual-basis formula gives $\sum_i g_i(e_i)=1$. Hence $(x_i)\mapsto\sum_i g_i(x_i)$ is a surjection $E^{(n)}\to R$, proving that $E$ is a generator. All these steps, including the double-centralizer calculation and handedness checks, are expanded in [[04 - Linear Algebra and Modules/Exercises/Exercise LA488 - Generators, Balanced Modules, and Rieffel's Theorem|Exercise LA488]].

> [!warning] The two base rings have different roles
> The finite projectivity in this criterion is over $S=\operatorname{End}_R(E)$, not over $R$. A generator need not be finitely generated or projective over the original ring. Also, Lang's definition of balanced requires an isomorphism $R\to R''(E)$, not just surjectivity onto the double centralizer.

### Rieffel's double-centralizer theorem

Suppose $R$ has no two-sided ideals other than $0$ and $R$, and $L$ is a nonzero left ideal. Then $LR$ is a nonzero two-sided ideal, so $LR=R$. Write $1=\sum_i x_i a_i$ with $x_i\in L$ and $a_i\in R$. The map

$$
L^{(n)}\longrightarrow R,\qquad (y_i)\longmapsto\sum_i y_i a_i
$$

is $R$-linear and surjective. Therefore $L$ is a generator and hence balanced:

$$
R\cong\operatorname{End}_{\operatorname{End}_R(L)}(L).
$$

This argument needs no Artinian hypothesis and no assumption that the left ideal $L$ is simple as a module.

## Examples and Boundaries

> [!example] The regular module
> The module ${}_RR$ is a generator. Its endomorphisms are the right multiplications $\rho_a(x)=xa$, since an $R$-linear map $h$ has $h(x)=xh(1)$. Composition gives $\rho_a\rho_b=\rho_{ba}$, so $\operatorname{End}_R(R)\cong R^{\mathrm{op}}$. The endomorphisms commuting with all right multiplications are exactly the left multiplications, recovering balancedness without treating a noncommutative ring as equal to its opposite ring.

> [!example] Adding an arbitrary summand
> The module $R\oplus F$ is a generator for every left $R$-module $F$, because projection onto $R$ is surjective. For instance, $\mathbb Z\oplus\mathbb Z/2\mathbb Z$ is a generator over $\mathbb Z$ but is not projective over $\mathbb Z$: a projective module is a direct summand of a free module and is therefore torsion-free over $\mathbb Z$. Morita's criterion instead asserts its finite projectivity over its own endomorphism ring.

> [!example] Faithfulness alone does not imply balancedness
> Let $R=k[t]$ and $E=k(t)$. This is a faithful $R$-module. Every $R$-linear endomorphism $h:E\to E$ is multiplication by $h(1)$: for $a,b\in k[t]$ with $b\ne0$, the identity $b h(a/b)=a h(1)$ gives $h(a/b)=(a/b)h(1)$. Thus $S=\operatorname{End}_R(E)=k(t)$ and $R''(E)=k(t)$. The canonical map is the proper inclusion $k[t]\hookrightarrow k(t)$, so $E$ is not balanced and not a generator, even though it is free of rank one over $S$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules and Grothendieck Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definitions and Morita criterion are in [S2, Ch. XVII, §7, Theorem 7.1, printed p. 660, PDF p. 675]. Rieffel's statement is [S2, Ch. XVII, §5, Theorem 5.4, printed p. 655, PDF p. 670]; the request for the full criterion and its consequence is [S2, Ch. XVII, Exercise 12, printed p. 662, PDF p. 677]. All three pages were visually checked.

The source proves the forward direction of Morita's criterion and leaves the converse to the reader. Its forward proof prints $g\in R'(E)$ at the step asserting that $g^{(n)}$ commutes with every matrix over $R'(E)$; the required statement is $g\in R''(E)$. The corrected proof and independent dual-basis converse are given in Exercise LA488. The explanations and examples here are independent derivations, not additional results attributed to the printed exercise.

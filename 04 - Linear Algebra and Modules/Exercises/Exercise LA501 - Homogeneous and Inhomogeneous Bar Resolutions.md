---
title: "Exercise LA501: Homogeneous and Inhomogeneous Bar Resolutions"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 3, printed p. 826, PDF p. 841"
created: 2026-09-29
---

# Exercise LA501: Homogeneous and Inhomogeneous Bar Resolutions

## Problem Statement

> [!question] Lang XX.3 — Printed formula
> The standard complex $E$ was written in homogeneous form, so the boundary maps have a certain symmetry. There is another complex which exhibits useful features as follows. Let $F^i$ be the free $\mathbb Z[G]$-module having for basis $i$-tuples (rather than $(i+1)$-tuples) $(x_1,\ldots,x_i)$. For $i=0$ we take $F_0=\mathbb Z[G]$ itself. Define the boundary operator by the formula
> $$
> d(x_1,\ldots,x_i)
> =x_1(x_2,\ldots,x_i)
> +\sum_{j=1}^{i-1}(-1)^j(x_1,\ldots,x_jx_{j+1},\ldots,x_i)
> +(-1)^{i+1}(x_1,\ldots,x_i).
> $$
> Show that $E\simeq F$ (as complexes of $G$-modules) via the association
> $$
> (x_1,\ldots,x_i)\longmapsto(1,x_1,x_1x_2,\ldots,x_1x_2\cdots x_i),
> $$
> and that the operator $d$ given for $F$ corresponds to the operator $d$ given for $E$ under this isomorphism.

> [!warning] Source issue: the last boundary term has the wrong degree and sign
> The printed final term retains an $i$-tuple and has sign $(-1)^{i+1}$. It must instead be $(-1)^i(x_1,\ldots,x_{i-1})$. We retain the printed formula above and prove the corrected chain-isomorphism statement. The empty tuple in degree $0$ denotes the group-ring basis vector.

## Hints

> [!hint]- Hint 1: Write the inverse using successive ratios
> Send a homogeneous tuple $(y_0,\ldots,y_i)$ to $y_0(y_0^{-1}y_1,y_1^{-1}y_2,\ldots,y_{i-1}^{-1}y_i)$.

> [!hint]- Hint 2: Distinguish the first, middle, and last deletions
> The first deletion produces the coefficient $x_1$, a middle deletion merges adjacent $x$'s, and the last deletion removes $x_i$.

## Solution

> [!success]- Independent verification of the corrected bar differential
> Use lower indices for chain degrees. Define the $\mathbb Z[G]$-linear map
> $$
> \Phi_i:F_i\longrightarrow E_i,\qquad
> [x_1|\cdots|x_i]\longmapsto(1,x_1,x_1x_2,\ldots,x_1\cdots x_i).
> $$
> Brackets here distinguish a free basis vector from a product in $G$. Its inverse on abelian-group basis tuples is
> $$
> \Psi_i(y_0,\ldots,y_i)
> =y_0[y_0^{-1}y_1|y_1^{-1}y_2|\cdots|y_{i-1}^{-1}y_i].
> $$
> Simultaneously multiplying all $y_j$ by $g$ leaves the successive ratios unchanged and changes the coefficient $y_0$ to $gy_0$, proving equivariance. Telescoping products show directly that $\Phi_i\Psi_i$ and $\Psi_i\Phi_i$ are identities.
>
> Write $p_0=1$ and $p_j=x_1\cdots x_j$. Apply the homogeneous differential to $(p_0,\ldots,p_i)$. Deleting $p_0$ gives
> $$
> (p_1,\ldots,p_i)=x_1(1,x_2,x_2x_3,\ldots,x_2\cdots x_i),
> $$
> which corresponds to $x_1[x_2|\cdots|x_i]$. Deleting $p_j$ with $1\le j<i$ changes the corresponding successive ratio to
> $$
> p_{j-1}^{-1}p_{j+1}=x_jx_{j+1},
> $$
> leaving the others unchanged. Deleting $p_i$ removes the last entry $x_i$ and has sign $(-1)^i$. Therefore the transported differential is precisely
> $$
> d_i[x_1|\cdots|x_i]
> =x_1[x_2|\cdots|x_i]
> +\sum_{j=1}^{i-1}(-1)^j[x_1|\cdots|x_jx_{j+1}|\cdots|x_i]
> +(-1)^i[x_1|\cdots|x_{i-1}].
> $$
> In particular $d_1[x]=(x-1)[\,]$. The degree-zero map is the augmentation $\varepsilon:F_0=\mathbb Z[G]\to\mathbb Z$.
>
> We have proved $\Phi_{i-1}d_i=d_i\Phi_i$, including the augmentations. Since the homogeneous augmented complex is exact and has $d^2=0$ (double-deletion cancellation and the prepend-$1$ contraction), the same assertions hold for the corrected inhomogeneous complex. Thus $\Phi$ is the claimed isomorphism of free resolutions.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]

## Notes

- Source formula, signs, and tuple lengths checked directly at [S2, Ch. XX, Exercise 3, printed p. 826, PDF p. 841].
- Proof status: independent derivation. The corrected last term is forced by the displayed source isomorphism; this is not an alternative convention.
- In degree $i=1$, the printed last term is already in the wrong module. The corrected differential is $d_1[x]=x-1$.
- No restriction to normalized cochains is imposed: tuples containing the identity element are allowed.


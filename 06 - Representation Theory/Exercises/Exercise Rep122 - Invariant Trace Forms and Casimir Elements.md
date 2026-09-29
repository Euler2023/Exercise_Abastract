---
title: "Exercise Rep122: Invariant Trace Forms and Casimir Elements"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - invariant-forms
  - casimir
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 15, printed p. 640, PDF p. 655"
created: 2026-09-29
---

# Exercise Rep122: Invariant Trace Forms and Casimir Elements

## Problem Statement

> [!question] Lang XVI.15 — Invariance of the Casimir element
> Let $E=\mathfrak{sl}_n(k)=$ subspace of $\operatorname{Mat}_n(k)$ consisting of matrices with trace $0$. Let $B$ be the bilinear form defined by $B(X,Y)=\operatorname{tr}(XY)$. Let $G=SL_n(k)$. Prove:
>
> (a) $B$ is $c(G)$-invariant, where $c(g)$ is conjugation by an element $g\in G$.
>
> (b) $B$ is invariant under the transpose $(X,Y)\mapsto({}^tX,{}^tY)$.
>
> (c) Let $k=\mathbb R$. Then $B$ is positive definite on the symmetric matrices and negative definite on the skew-symmetric matrices.
>
> (d) Suppose $G$ is given with an action on the algebra $D$ of Exercise 14, and that the linear map $\mathcal D:E\to D$ is $G$-linear. Show that the Casimir element is $G$-invariant (for the conjugation action on $S(E)$, and the given action on $D$).

> [!warning] Source issue: nondegeneracy in part (d)
> The printed question does not restrict the characteristic of $k$. For $n\ge1$, the radical of its trace form is
> $$
> \operatorname{rad}(B)=\mathfrak{sl}_n(k)\cap kI_n.
> $$
> Thus $B$ is nondegenerate exactly when $n\cdot1_k\ne0$. If $\operatorname{char}(k)\mid n$, then $I_n\in E$ and $\operatorname{rad}(B)=kI_n\ne0$, so the $B$-dual bases required in Exercise 14 do not exist. We prove (a) and (b) over every field, (c) over $\mathbb R$ as printed, and (d) with the necessary additional hypothesis $n\cdot1_k\ne0$. An action on the algebra $D$ is understood to be by $k$-algebra automorphisms.

## Hints

> [!hint]- Hint 1
> Expand $\operatorname{tr}(XY)=\sum_{i,j}x_{ij}y_{ji}$. For the radical, test against the off-diagonal matrix units and the diagonal differences $E_{ii}-E_{jj}$.

> [!hint]- Hint 2
> If $g$ preserves $B$, then $gv_1',\ldots,gv_m'$ is the $B$-dual basis to $gv_1,\ldots,gv_m$. Apply the basis independence of the Casimir tensor, then use the equivariance of $\mathcal D$ and multiplication in $D$.

## Solution

> [!success]- Independent derivation, with the necessary hypothesis in (d)
> Write $g\cdot X=gXg^{-1}$ and take $n\ge1$. The trace identity
> $$
> \operatorname{tr}(XY)=\sum_{i,j}x_{ij}y_{ji}
> =\operatorname{tr}(YX)
> $$
> holds over any field. In particular, $B$ is symmetric. Both conjugation and transpose preserve trace-zero matrices, so the stated transformations act on $E$.
>
> **(a) Conjugation invariance.** For $g\in SL_n(k)$,
> $$
> B(gXg^{-1},gYg^{-1})
> =\operatorname{tr}(gXYg^{-1})
> =\operatorname{tr}(XY)=B(X,Y).
> $$
> The middle equality follows by moving the final factor $g^{-1}$ to the front inside the trace. In fact, the calculation works for every $g\in GL_n(k)$.
>
> **(b) Transpose invariance.** Since trace is unchanged by transpose,
> $$
> B({}^tX,{}^tY)
> =\operatorname{tr}({}^tX\,{}^tY)
> =\operatorname{tr}({}^t(YX))
> =\operatorname{tr}(YX)=B(X,Y).
> $$
>
> **(c) The two definite restrictions.** Let $k=\mathbb R$. If ${}^tX=X$, then
> $$
> B(X,X)=\sum_{i,j}x_{ij}x_{ji}=\sum_{i,j}x_{ij}^2,
> $$
> which is positive for every nonzero symmetric $X$. If ${}^tX=-X$, then
> $$
> B(X,X)=\sum_{i,j}x_{ij}x_{ji}=-\sum_{i,j}x_{ij}^2,
> $$
> which is negative for every nonzero skew-symmetric $X$. Restricting the first calculation to the symmetric trace-zero matrices gives the required positive subspace of $E$; real skew-symmetric matrices already have trace zero.
>
> **The nondegeneracy needed for (d).** Suppose $X=(x_{ij})\in E$ pairs to zero with every $Y\in E$. For $i\ne j$, the matrix unit $E_{ji}$ has trace zero, and
> $$
> 0=B(X,E_{ji})=x_{ij}.
> $$
> Thus $X$ is diagonal. Testing $E_{ii}-E_{jj}$ gives $x_{ii}=x_{jj}$, so $X=aI_n$. Conversely, $B(aI_n,Y)=a\operatorname{tr}(Y)=0$ for every $Y\in E$. Consequently
> $$
> \operatorname{rad}(B)
> =\{aI_n:a\in k,\ na=0\}
> =E\cap kI_n.
> $$
> This proof also covers $n=1$, where $E=0$ and its radical is zero. Since a nonzero element of a field is invertible, $B$ is nondegenerate if $n\cdot1_k\ne0$. If $n\cdot1_k=0$, every scalar matrix lies in its radical, including the nonzero $I_n$.
>
> **(d) The invariant tensor and its images.** Assume $n\cdot1_k\ne0$. Put $m=\dim E=n^2-1$ and choose a basis $v_1,\ldots,v_m$ with its $B$-dual basis $v_1',\ldots,v_m'$. The Casimir tensor is
> $$
> C_B=\sum_{i=1}^m v_i\otimes v_i'.
> $$
> Its basis independence is proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA483 - Basis Independence of Casimir Tensors|Exercise LA483]]: the isomorphism $E\otimes E\to\operatorname{End}_k(E)$, $x\otimes y\mapsto(z\mapsto xB(y,z))$, sends $C_B$ to $\operatorname{id}_E$.
>
> For each $g\in G$, (a) gives
> $$
> B(g\cdot v_i,g\cdot v_j')=B(v_i,v_j')=\delta_{ij}.
> $$
> Thus $g\cdot v_i'$ is the dual basis to $g\cdot v_i$. Basis independence now yields
> $$
> (g\otimes g)C_B
> =\sum_i(g\cdot v_i)\otimes(g\cdot v_i')=C_B.
> $$
> The action on $E$ extends to $S(E)$ by algebra automorphisms. Applying the equivariant map $x\otimes y\mapsto xy$ gives
> $$
> g\cdot Q_B
> =\sum_i(g\cdot v_i)(g\cdot v_i')=Q_B.
> $$
> Finally, let $G$ act on $D$ by $k$-algebra automorphisms and suppose $\mathcal D(g\cdot v)=g\cdot\mathcal D(v)$. Preservation of multiplication and this equivariance give
> $$
> \begin{aligned}
> g\cdot\omega_{B,\mathcal D}
> &=\sum_i\bigl(g\cdot\mathcal D(v_i)\bigr)
>             \bigl(g\cdot\mathcal D(v_i')\bigr)\\
> &=\sum_i\mathcal D(g\cdot v_i)\mathcal D(g\cdot v_i')
> =\omega_{B,\mathcal D}.
> \end{aligned}
> $$
> The final equality follows by applying $x\otimes y\mapsto\mathcal D(x)\mathcal D(y)$ to the invariant tensor $C_B$. This proves both invariance assertions in (d).

## Related Concepts

- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[04 - Linear Algebra and Modules/Concepts/Casimir Tensors and Invariant Elements|Casimir Tensors and Invariant Elements]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]

## Notes

- Source: [S2, Ch. XVI, Exercise 15, printed p. 640, PDF p. 655], visually verified. All four printed subparts are preserved. The solution and radical calculation are independent derivations; the missing characteristic condition is made visible before the hints.
- A concrete excluded case is $n=2$ over $\mathbb F_2$: the identity matrix has trace zero and pairs to zero with all of $\mathfrak{sl}_2(\mathbb F_2)$. Parts (a) and (b) still hold there, but the nondegenerate-form construction in (d) is unavailable.
- The form here is the trace form in the defining matrix representation, not by definition the Killing form $\operatorname{tr}(\operatorname{ad}_X\operatorname{ad}_Y)$.
- The action on $S(E)$ in (d) is the algebra action induced by conjugation on $E$. It does not mean conjugating elements internally in the commutative algebra $S(E)$. An action on $D$ by arbitrary linear maps would not suffice to transport multiplication.
- The primary argument in (d) concerns invariant tensors and equivariant algebra maps, so this numbered exercise is filed under Representation Theory. The preceding construction is filed under Linear Algebra and Modules.

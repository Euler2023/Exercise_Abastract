---
title: "Exercise Rep150: The Exterior Model of a Complex Clifford Representation"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 18, printed pp. 757-758, PDF pp. 772-773"
created: 2026-09-29
---

# Exercise Rep150: The Exterior Model of a Complex Clifford Representation

## Problem Statement

> [!question] Lang XIX.18
> Still assuming $g$ non-degenerate, let $J$ be an automorphism of $(E,g)$ (i.e. $g(Jx,Jy)=g(x,y)$ for all $x,y\in E$) such that $J^2=-\operatorname{id}$. Let $E_{\mathbb C}=\mathbb C\otimes_{\mathbb R}E$ be the extension of scalars from $\mathbb R$ to $\mathbb C$. Then $E_{\mathbb C}$ has a direct sum decomposition
>
> $$
> E_{\mathbb C}=E_{\mathbb C}^+\oplus E_{\mathbb C}^-
> $$
>
> into the eigenspaces of $J$, with eigenvalues $1$ and $-1$ respectively. (Proof?) There is a representation of $E_{\mathbb C}$ on $\bigwedge E_{\mathbb C}^+$, i.e. a homomorphism $E_{\mathbb C}\to\operatorname{End}_{\mathbb C}(E_{\mathbb C}^+)$ whereby an element of $E_{\mathbb C}^+$ operates by exterior multiplication, and an element of $E_{\mathbb C}^-$ operates by inner multiplication, defined as follows.
>
> For $x'\in E_{\mathbb C}^-$ there is a unique $\mathbb C$-linear map having the effect
>
> $$
> x'(x_1\wedge\cdots\wedge x_r)
> =-2\sum_{i=1}^r(-1)^{i-1}\langle x',x_i\rangle
> x_1\wedge\cdots\wedge\widehat x_i\wedge\cdots\wedge x_r.
> $$
>
> Prove that under this operation, you get an isomorphism
>
> $$
> C_g(E)_{\mathbb C}\longrightarrow
> \operatorname{End}_{\mathbb C}(\bigwedge E_{\mathbb C}^+).
> $$
>
> [Hint: Count dimensions.]

> [!warning] Source issue
> The printed eigenvalues $1,-1$ conflict with $J^2=-I$: they must be $i,-i$. The stated endomorphism target omits the exterior algebra and must be $\operatorname{End}_{\mathbb C}(\bigwedge E_{\mathbb C}^+)$. Finally, Lang's definition in section 4 is $x^2=g(x,x)1$, so the contraction coefficient must be $+2$, not the printed $-2$, when $\langle x',x\rangle=g(x',x)$. The printed negative coefficient satisfies the opposite quadratic relation. The original wording and formula above are retained; the solution proves the corrected version.

## Hints

> [!hint]- Hint 1
> Use the $\pm i$ eigenspaces. Each is isotropic and they pair perfectly; check the Clifford square relation to determine the contraction sign.

> [!hint]- Hint 2
> After choosing dual isotropic bases, exterior multiplication and contraction give occupation projections. Their products produce a vacuum projection and all matrix units.

## Solution

> [!success]- Independent derivation
> The setting inherited from Exercise 17 is a real vector space $E$ of dimension $2m$ with a nondegenerate symmetric bilinear form $g$. We prove the statement with the three corrections displayed above. Extend $g$ complex bilinearly. Since $J^2=-I$ and $T^2+1=(T-i)(T+i)$ has distinct roots,
>
> $$
> U=E_{\mathbb C}^+=\ker(J-iI),\qquad
> V=E_{\mathbb C}^-=\ker(J+iI),\qquad E_{\mathbb C}=U\oplus V.
> $$
>
> For example, the projection onto $U$ is $(I-iJ)/2$, and that onto $V$ is $(I+iJ)/2$, proving the decomposition directly. If $u,u'\in U$, then $g(u,u')=g(Ju,Ju')=-g(u,u')$, so $g(U,U)=0$; similarly $g(V,V)=0$. Nondegeneracy of $g$ implies that its pairing between $U,V$ is perfect: a vector in either side annihilating the other annihilates all of $E_{\mathbb C}$. Thus $\dim U=\dim V=m$.
>
> On $S=\bigwedge U$ let $\epsilon_u$ denote exterior multiplication and let $\iota_v$ be contraction with the functional $g(v,-)$ on $U$:
>
> $$
> \iota_v(u_1\wedge\cdots\wedge u_r)
> =\sum_{a=1}^r(-1)^{a-1}g(v,u_a)
> u_1\wedge\cdots\wedge\widehat u_a\wedge\cdots\wedge u_r.
> $$
>
> Define $c(u+v)=\epsilon_u+2\iota_v$. Deleting repeated factors gives $\epsilon_u^2=\iota_v^2=0$, while the term deleting the newly inserted $u$ gives
>
> $$
> \iota_v\epsilon_u+\epsilon_u\iota_v=g(v,u)I.
> $$
>
> Consequently
>
> $$
> c(u+v)^2=2g(v,u)I=g(u+v,u+v)I.
> $$
>
> The Clifford universal property yields an algebra map
>
> $$
> \rho:C_g(E)_{\mathbb C}\longrightarrow\operatorname{End}_{\mathbb C}(S).
> $$
>
> To prove surjectivity, choose a basis $u_1,\ldots,u_m$ of $U$ and vectors $v_1,\ldots,v_m$ of $V$ with $2g(v_j,u_k)=\delta_{jk}$. Both the creation operators $\epsilon_j=\epsilon_{u_j}$ and the standard deletion operators $a_j=2\iota_{v_j}$ are in the image. On the exterior basis $u_I$, the operator $N_j=\epsilon_ja_j$ is $1$ if $j\in I$ and $0$ otherwise: the two signs from deletion and reinsertion cancel. Thus the commuting projections $N_j$ give
>
> $$
> P_\varnothing=\prod_{j=1}^m(I-N_j),
> $$
>
> the projection onto the line of $1$, killing every positive-degree basis vector.
>
> For increasing subsets $I=(i_1<\cdots<i_r)$ and $J=(j_1<\cdots<j_s)$, the operator
>
> $$
> \epsilon_{i_1}\cdots\epsilon_{i_r}
> P_\varnothing a_{j_s}\cdots a_{j_1}
> $$
>
> sends $u_J$ to $u_I$ and kills every other $u_K$. If $J\not\subseteq K$, a required deletion is zero; if $J\subsetneq K$, the remaining positive-degree vector is killed by $P_\varnothing$; if $K=J$, the successive deletions each remove the first remaining factor and give $1$. These are all matrix units, so $\rho$ is onto.
>
> The independent Clifford-basis proof in R316 gives $\dim_{\mathbb C}C_g(E)_{\mathbb C}=2^{2m}$. Also $\dim S=2^m$, hence $\dim\operatorname{End}(S)=2^{2m}$. Surjectivity and equality of finite dimensions imply injectivity, proving the required corrected isomorphism. When $E=0$, the empty-product formulas give $\mathbb C\cong\operatorname{End}_{\mathbb C}(\mathbb C)$.
>
> Finally, retaining the printed negative contraction instead gives $c_-(u+v)^2=-g(u+v,u+v)I$. Thus that action represents $C_{-g}$, not the stipulated $C_g$. Although the two complex algebras can be related by replacing every vector by $iv$, that would change the stated action and cannot silently repair it.

## Related Concepts

- [[02 - Ring Theory/Concepts/Clifford Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[06 - Representation Theory/Concepts/Representation Theory]]

## Notes

The complete two-page exercise was checked at [S2, Ch. XIX, Exercise 18, printed pp. 757-758, PDF pp. 772-773]. The convention $v^2=g(v,v)1$ was checked at section 4, printed pp. 749-750 / PDF pp. 764-765. The exterior-model proof and all three repairs are independent deductions. Counting equal dimensions alone would not establish an isomorphism; the matrix-unit construction proves surjectivity first.

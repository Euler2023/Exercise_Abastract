---
title: "Exercise LA497: Connections Curvature and Commutators"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 13, printed pp. 755-756, PDF pp. 770-771"
created: 2026-09-29
---

# Exercise LA497: Connections Curvature and Commutators

## Problem Statement

> [!question] Lang XIX.13
> Let $R\to A$ be a homomorphism of commutative rings and $E$ an $A$-module. A connection is a homomorphism of abelian groups
> $$
> \nabla:E\longrightarrow\Omega^1_{A/R}\otimes_A E,\qquad
> \nabla(ax)=a\nabla(x)+da\otimes x.
> $$
> Its kernel $E^\nabla$ is called the submodule of horizontal elements.
>
> **(a)** For $i\ge1$, define $\Omega^i_{A/R}=\Lambda^i\Omega^1_{A/R}$. Show that $\nabla$ extends to an $R$-module homomorphism
> $$
> \nabla_i:\Omega^i_{A/R}\otimes_A E\longrightarrow\Omega^{i+1}_{A/R}\otimes_A E,\qquad
> \nabla_i(\omega\otimes x)=d\omega\otimes x+(-1)^i\omega\wedge\nabla(x).
> $$
> **(b)** Define the curvature $K=\nabla_1\circ\nabla:E\to\Omega^2_{A/R}\otimes_A E$. Show that $K$ is $A$-linear and that
> $$
> \nabla_{i+1}\nabla_i(\omega\otimes x)=\omega\wedge K(x).
> $$
> **(c)** Write $\operatorname{Der}(A/R)$ for the $A$-module of $R$-derivations $A\to A$. Show that $\nabla$ induces a unique $A$-linear map
> $$
> \nabla:\operatorname{Der}(A/R)\longrightarrow\operatorname{End}_R(E)
> $$
> such that $\nabla(D)(ax)=D(a)x+a\nabla(D)(x)$.
>
> **(d)** Prove
> $$
> [\nabla(D_1),\nabla(D_2)]-\nabla([D_1,D_2])=(D_1\wedge D_2)\circ K.
> $$
> Here $[f,g]=fg-gf$. The right side is the composition
> $$
> E\xrightarrow{K}\Omega^2_{A/R}\otimes_A E
> \xrightarrow{(D_1\wedge D_2)\otimes1}A\otimes_A E\cong E.
> $$

> [!warning] Source issue
> The source's “horizontal submodule” means an $R$-submodule, not generally an $A$-submodule. In (c), “induces a unique” is valid for contraction of the given $\nabla$; the displayed Leibniz rule by itself does not characterize a unique map. The counterexample is included in the solution.

## Hints

> [!hint]- Hint 1
> Check the balancing relation $(a\omega)\otimes x=\omega\otimes ax$.

> [!hint]- Hint 2
> Write $\nabla x=\sum_j\alpha_j\otimes x_j$ and expand both sides of (d).

## Solution

> [!success]- Independent derivation
> We first specify the differential used in (a). The exterior algebra on $\Omega^1_{A/R}$ has the unique graded derivation of degree one satisfying
> $$
> d(a_0\,da_1\wedge\cdots\wedge da_i)=da_0\wedge da_1\wedge\cdots\wedge da_i.
> $$
> It is well defined on the differential relations: additivity and $dr=0$ remain relations; differentiating $d(ab)=a\,db+b\,da$ gives $da\wedge db+db\wedge da=0$. The alternating relations are preserved by the graded product rule. These checks give a descended operator with $d^2=0$ on the displayed generators, hence everywhere.
>
> **(a)** The connection is $R$-linear since $dr=0$ for $r\in R$. For $a\in A$,
> $$
> d(a\omega)\otimes x+(-1)^ia\omega\wedge\nabla x
> =da\wedge\omega\otimes x+a\,d\omega\otimes x+(-1)^ia\omega\wedge\nabla x.
> $$
> The proposed value on $\omega\otimes ax$ is the same because $\omega\wedge da=(-1)^i da\wedge\omega$. This proves balancing, hence well-definedness and $R$-linearity. The extension includes $\nabla_0=\nabla$.
>
> **(b)** Applying $\nabla_1$ to $a\nabla x+da\otimes x$ produces $aKx+da\wedge\nabla x-da\wedge\nabla x$, so $K(ax)=aKx$. More generally, with $\nabla x=\sum_j\alpha_j\otimes x_j$, the two terms involving $d\omega\wedge\alpha_j$ have coefficients $(-1)^{i+1}$ and $(-1)^i$ and cancel, leaving
> $$
> \nabla_{i+1}\nabla_i(\omega\otimes x)
> =\omega\wedge\sum_j(d\alpha_j\otimes x_j-\alpha_j\wedge\nabla x_j)
> =\omega\wedge Kx.
> $$
>
> **(c)** The universal property gives the unique $A$-linear functional $\iota_D:\Omega^1_{A/R}\to A$ with $\iota_D(da)=D(a)$. Define $\nabla_D=(\iota_D\otimes1)\nabla$. Then $\nabla_{aD}=a\nabla_D$, and contraction of the connection identity gives $\nabla_D(ax)=D(a)x+a\nabla_Dx$. Uniqueness means uniqueness of this contraction construction from the specified connection.
>
> The Leibniz identity alone would not ensure uniqueness: on $A=R[t]$, $E=A$, both $D\mapsto D$ and $D\mapsto D+D(t)\operatorname{id}_A$ have it. Also $\ker\nabla$ is an $R$-submodule, but generally not an $A$-submodule: for the usual connection $d:A\to\Omega^1$, $1$ is horizontal while $t$ is not.
>
> **(d)** Put $\alpha(D)=\iota_D\alpha$ and define
> $$
> (D_1\wedge D_2)(\alpha\wedge\beta)
> =\alpha(D_1)\beta(D_2)-\alpha(D_2)\beta(D_1).
> $$
> For $\alpha=a\,db$, direct expansion proves
> $$
> (d\alpha)(D_1,D_2)
> =D_1(\alpha(D_2))-D_2(\alpha(D_1))-\alpha([D_1,D_2]).
> $$
> Such forms generate $\Omega^1$, so the identity holds generally. Write $\nabla x=\sum_j\alpha_j\otimes x_j$. Expanding the left side in (d) gives
> $$
> \sum_j(d\alpha_j)(D_1,D_2)x_j
> +\sum_j\{\alpha_j(D_2)\nabla_{D_1}x_j-\alpha_j(D_1)\nabla_{D_2}x_j\}.
> $$
> This is exactly the contraction of $\sum_j(d\alpha_j\otimes x_j-\alpha_j\wedge\nabla x_j)=Kx$, proving (d).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Connections and Curvature]]
- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]
- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra]]

## Notes

- **Source status:** [S2, Ch. XIX, Ex. 13, printed pp. 755-756, PDF pp. 770-771]. The original page image was checked; the solution above is an independent derivation.
- The exterior differential and contraction identities are proved here; no smoothness, projectivity, or finite rank is assumed.

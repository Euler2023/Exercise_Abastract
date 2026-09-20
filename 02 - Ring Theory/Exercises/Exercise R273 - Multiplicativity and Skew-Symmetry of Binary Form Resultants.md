---
title: "Exercise R273: Multiplicativity and Skew-Symmetry of Binary Form Resultants"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - elimination-theory
  - binary-forms
  - resultant-identities
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises, Exercise 12, printed p. 411, PDF p. 426"
created: 2026-09-15
---

# Exercise R273: Multiplicativity and Skew-Symmetry of Binary Form Resultants

## Problem Statement

> [!question]
> For forms in 2 variables, prove directly from the definition used in §4 that one has
> $$
> \operatorname{Res}(fg, h) = \operatorname{Res}(f, h) \operatorname{Res}(g, h)
> $$
> $$
> \operatorname{Res}(f, g) = (-1)^{(\deg f)(\deg g)} \operatorname{Res}(g, f).
> $$

## Hints

> [!hint]- Hint 1
> Use the root product in §4 first for generic forms with nonzero leading coefficients. The roots of $fg$ consist of the roots of $f$ and of $g$, with their multiplicities.

> [!hint]- Hint 2
> For linear factors written with a minus sign, the convention is
> $$
> \operatorname{Res}(\alpha X-\beta Y,\gamma X-\delta Y)
> =\det\begin{pmatrix}\alpha&-\beta\\\gamma&-\delta\end{pmatrix}
> =\beta\gamma-\alpha\delta.
> $$
> Check this on $(f,g)=(X,Y)$ before taking products. Swapping the two factors changes the sign of each such determinant.

## Solution

> [!success]- Solution
> Fix positive degrees $d,e,m$. Start with generic binary forms over the fraction field of the polynomial ring over $\mathbf Z$ in all their coefficients, and pass to an algebraic closure. Their leading coefficients are nonzero, so write
> $$
> f=a\prod_{i=1}^d(X-r_iY),\qquad
> g=b\prod_{j=1}^e(X-s_jY),\qquad
> h=c\prod_{\ell=1}^m(X-t_\ell Y).
> $$
> Lang's definition in §4 is
> $$
> \operatorname{Res}(f,g)=a^e b^d
> \prod_{i=1}^d\prod_{j=1}^e(r_i-s_j).
> $$
> It is a polynomial with integer coefficients in the coefficients of the forms. [S2, Ch. IX, §4, printed p. 403, PDF p. 418]
>
> **Multiplicativity.** The leading coefficient of $fg$ is $ab$, and its list of roots is the concatenation of those of $f$ and $g$. Therefore
> $$
> \begin{aligned}
> \operatorname{Res}(fg,h)
> &=(ab)^m c^{d+e}
> \prod_{i,\ell}(r_i-t_\ell)
> \prod_{j,\ell}(s_j-t_\ell)\\
> &=\left(a^m c^d\prod_{i,\ell}(r_i-t_\ell)\right)
> \left(b^m c^e\prod_{j,\ell}(s_j-t_\ell)\right)\\
> &=\operatorname{Res}(f,h)\operatorname{Res}(g,h).
> \end{aligned}
> $$
>
> **Interchange of the forms.** Each of the $de$ root differences reverses sign, so
> $$
> \begin{aligned}
> \operatorname{Res}(g,f)
> &=b^d a^e\prod_{j,i}(s_j-r_i)\\
> &=(-1)^{de}a^e b^d\prod_{i,j}(r_i-s_j)\\
> &=(-1)^{de}\operatorname{Res}(f,g).
> \end{aligned}
> $$
> Multiplying by $(-1)^{de}$ gives the stated formula.
>
> **Specialization.** Both sides of each identity are polynomials over $\mathbf Z$ in the generic coefficients. Equality in their fraction field is therefore equality in this polynomial ring. Specializing proves the identities over every commutative ring, including leading-coefficient specializations to zero, with the prescribed homogeneous degrees retained. In particular no root at infinity is lost by the initial generic calculation.
>
> **Equivalent linear-factor notation.** For nonzero forms over an algebraically closed field, absorb scalar factors into factorizations
> $$
> f=\prod_i(\alpha_iX-\beta_iY),\qquad
> g=\prod_j(\gamma_jX-\delta_jY).
> $$
> Substituting $r_i=\beta_i/\alpha_i$ and $s_j=\delta_j/\gamma_j$ in the generic root formula and cancelling denominators gives the polynomial identity
> $$
> \operatorname{Res}(f,g)
> =\prod_{i,j}(\beta_i\gamma_j-\alpha_i\delta_j).
> $$
> Since it is a polynomial identity in the linear-factor coefficients, it remains valid when some $\alpha_i$ or $\gamma_j$ is zero. In particular $\operatorname{Res}(X,Y)=1$, consistently with the Sylvester normalization.

## Related Concepts

- [[02 - Ring Theory/Concepts/Multivariate Resultants and Resultant Systems|Multivariate Resultants and Resultant Systems]]
- [[04 - Linear Algebra and Modules/Concepts/Polynomial Resultants|Polynomial Resultants]]
- [[02 - Ring Theory/Exercises/Exercise R271 - Consistency of Multivariable and Sylvester Resultants|Exercise R271 (Consistency of Resultants)]]

## Notes

- **Independent derivation:** The two identities follow directly from the root-product definition on Lang, Ch. IX, §4, printed p. 403 / PDF p. 418. The extension to arbitrary coefficients is justified by equality in the universal coefficient ring.
- **Sign convention:** For factors $\alpha X-\beta Y$ and $\gamma X-\delta Y$, the relevant determinant uses their actual coefficient rows $(\alpha,-\beta)$ and $(\gamma,-\delta)$, giving $\beta\gamma-\alpha\delta$.
- **Degree convention:** Under specialization, resultants use the fixed degrees of the homogeneous forms, even if a leading coefficient vanishes. Over a ring with zero divisors, these prescribed degrees also specify the identity when a product's actual degree drops.

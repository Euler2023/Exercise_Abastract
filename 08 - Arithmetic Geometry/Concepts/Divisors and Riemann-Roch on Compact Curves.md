---
title: Divisors and Riemann-Roch on Compact Curves
aliases:
  - Canonical Divisors and Riemann-Roch Spaces
  - Divisor Spaces on Compact Riemann Surfaces
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-10-28
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.4, Theorem 3.4.1 and Corollary 3.4.2, printed pp. 84–85, PDF pp. 98–99; Picard group, Section 6.1, printed p. 218, PDF p. 232"
source_status: verified
status: not-started
---

# Divisors and Riemann-Roch on Compact Curves

## Definition

> [!info] Divisors and their function spaces
> Let $X$ be a compact connected Riemann surface with meromorphic function field $\mathbb C(X)$. A divisor is a finite formal sum $D=\sum_x n_x[x]$ with $n_x\in\mathbb Z$. Its degree is $\deg D=\sum_xn_x$; it is effective when every $n_x\ge0$.
>
> For a nonzero meromorphic function $f$, define $\operatorname{div}(f)=\sum_x\nu_x(f)[x]$, where $\nu_x(f)$ is its order of zero, or the negative of its pole order. These are principal divisors. The space associated to a divisor is
> $$
> L(D)=\{0\}\cup\{f\in\mathbb C(X)^\times:\operatorname{div}(f)+D\ge0\},
> \qquad \ell(D)=\dim_{\mathbb C}L(D).
> $$
> For a nonzero meromorphic differential $\lambda=f(q)dq$, its order at the coordinate center is $\nu_0(f)$. Its divisor $K=\operatorname{div}(\lambda)$ is a canonical divisor. Changing to another nonzero meromorphic differential changes $K$ by a principal divisor.

## Intuition

A positive coefficient of $D$ permits a pole of a specified maximum order. A negative coefficient requires a zero of at least that order. The space $L(D)$ counts how many meromorphic functions satisfy all these local conditions simultaneously. Riemann–Roch expresses the global obstruction in terms of genus and complementary differentials.

## Key Properties

1. **Orders and vector spaces.** Laurent expansions give $\nu_x(fg)=\nu_x(f)+\nu_x(g)$ and $\nu_x(f+g)\ge\min(\nu_x(f),\nu_x(g))$, with $\nu_x(0)=+\infty$ for the second formula. Thus $L(D)$ is a vector space. Principal divisors have degree zero by the zero-pole degree theorem for meromorphic functions on a compact surface.
2. **Linear equivalence.** If $D'=D+\operatorname{div}(u)$, multiplication by $u$ identifies $L(D')$ with $L(D)$, since $\operatorname{div}(fu)+D=\operatorname{div}(f)+D'$. In particular $\ell(D')=\ell(D)$.
3. **Picard group.** The degree-zero divisor classes form $\operatorname{Pic}^0(X)=\operatorname{Div}^0(X)/\{\operatorname{div}(f):f\ne0\}$. They are not the same as the points of $X$ with a group operation unless additional genus-one structure is specified.
4. **Riemann–Roch.** For genus $g$ and any canonical divisor $K$, the source states the theorem
   $$
   \ell(D)-\ell(K-D)=\deg D+1-g.
   $$
   This is a named imported theorem here; the book does not prove it in Section 3.4.
5. **Canonical degree and large degree.** Holomorphic functions on compact connected $X$ are constant by the maximum modulus principle, so $\ell(0)=1$. Setting $D=0$ in Riemann–Roch gives $\ell(K)=g$. Setting $D=K$ then gives $g=\deg K+1-g+1$, so $\deg K=2g-2$. If $\deg D<0$, a nonzero $f\in L(D)$ would imply $0+\deg D\ge0$, impossible. Hence $\ell(D)=0$ in negative degree. If $\deg D>2g-2$, then $K-D$ has negative degree and Riemann–Roch reduces to $\ell(D)=\deg D+1-g$.
6. **Differentials as functions times a reference differential.** Every meromorphic differential is $f\lambda$ for a unique $f\in\mathbb C(X)$, because the ratios of local coefficients agree under coordinate changes. The condition that $f\lambda$ be holomorphic is exactly $\operatorname{div}(f)+K\ge0$, so $L(K)\simeq H^0(X,\Omega^1)$. The source's shorthand $L(\lambda)$ means $L(\operatorname{div}\lambda)$, rather than applying the divisor-space definition directly to a differential.

## Examples

- On $\mathbb P^1(\mathbb C)$, $L(m[\infty])$ for $m\ge0$ consists exactly of polynomials of degree at most $m$: the absence of finite poles makes a rational function a polynomial, and its order at infinity is minus its degree. A basis is $1,z,\ldots,z^m$, with dimension $m+1$.
- On the same sphere, $dz=-w^{-2}dw$ in the coordinate $w=1/z$, so $\operatorname{div}(dz)=-2[\infty]$, agreeing with $2g-2=-2$.
- On a complex torus $E=\mathbb C/\Lambda$, $dz$ is nowhere zero, so a canonical divisor is zero. For $\deg D>0$, Riemann–Roch gives $\ell(D)=\deg D$. For a divisor of degree zero, a nonzero $f\in L(D)$ forces the effective divisor $\operatorname{div}(f)+D$ to have degree zero and hence vanish. Thus $\ell(D)=1$ when $D$ is principal and $\ell(D)=0$ otherwise.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]
- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]
- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

The definitions of $L(D)$, canonical divisors, Riemann–Roch and its four corollaries were checked on the original 200 dpi images of printed pp. 84–85 / PDF pp. 98–99. The Picard definition was checked on printed p. 218 / PDF p. 232. The source states Riemann–Roch and refers out for its proof, then proves the corollaries. The elementary derivations and examples above are independently expanded; their named inputs are Riemann–Roch, the zero-pole degree theorem, the maximum modulus principle, and the rational-function description of the sphere.

This note concerns compact complex curves. Applying analogous formulas to algebraic curves over other fields requires the appropriate algebraic Riemann–Roch theorem and residue-field degrees for closed points; the analytic definitions alone do not establish those generalizations.

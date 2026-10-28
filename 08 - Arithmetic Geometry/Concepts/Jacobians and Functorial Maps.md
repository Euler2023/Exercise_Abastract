---
title: Jacobians and Functorial Maps
aliases:
  - Analytic Jacobians and Picard Functoriality
  - Trace and Norm Maps on Compact Curves
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-10-28
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Sections 6.1–6.3; Definition 6.1.1 and Abel's Theorem 6.1.2, printed p. 218, PDF p. 232; period lattice inputs, printed p. 217, PDF p. 231; degree and divisor identities, printed pp. 227–228, PDF pp. 241–242; modular differential diagrams, printed p. 232, PDF p. 246"
source_status: verified
status: not-started
---

# Jacobians and Functorial Maps

## Definition

> [!info] The analytic Jacobian
> Let $X$ be a compact connected Riemann surface of genus $g$ and set $W_X=H^0(X,\Omega^1)$. A homology class acts on $W_X$ by integration. The period theorem identifies $H_1(X,\mathbb Z)$ with a lattice $\Lambda_X$ of rank $2g$ in $W_X^\vee$. The Jacobian is
> $$
> \operatorname{Jac}(X)=W_X^\vee/\Lambda_X.
> $$
> For a basepoint $x_0$, the Abel–Jacobi map is $j_{x_0}(x)=[\omega\mapsto\int_{x_0}^x\omega]$. Changing the integration path changes the functional by a period, so the class is well defined.

> [!info] Abel's isomorphism
> Abel's theorem identifies degree-zero divisor classes with the Jacobian:
> $$
> \operatorname{Pic}^0(X)\simeq\operatorname{Jac}(X),\qquad
> \left[\sum_x n_x[x]\right]\longmapsto
> \left[\omega\mapsto\sum_x n_x\int_{x_0}^x\omega\right].
> $$
> The degree-zero condition makes the right side independent of the chosen basepoint. The theorem, including the description of its kernel by principal divisors, is an imported input here.

## Intuition

The Jacobian turns path integration into an additive compact group by discarding loop periods. A map of curves transfers points in one direction and pulls functions and differentials in the other. Duality reverses the differential arrows again, producing maps of Jacobians. Norms, traces and ramification multiplicities explain how those arrows fit together.

## Key Properties

### Forward and reverse maps

Let $h:X\to Y$ be a nonconstant holomorphic map, with degree $d$ and local degrees $e_x$. Then $\sum_{h(x)=y}e_x=d$.

| Construction | Forward map | Reverse map |
|---|---|---|
| Functions and differentials | $\operatorname{norm}_h:\mathbb C(X)^\times\to\mathbb C(Y)^\times$; $\operatorname{tr}_h:W_X\to W_Y$ | $h^*g=g\circ h$ and differential pullback $h^*:W_Y\to W_X$ |
| Divisors | $h_D[x]=[h(x)]$ | $h^D[y]=\sum_{h(x)=y}e_x[x]$ |
| Picard groups | $h_P:\operatorname{Pic}^0(X)\to\operatorname{Pic}^0(Y)$ | $h^P:\operatorname{Pic}^0(Y)\to\operatorname{Pic}^0(X)$ |
| Jacobians | $h_J[\ell]=[\ell\circ h^*]$ | $h^J[\psi]=[\psi\circ\operatorname{tr}_h]$ |

Off the branch values the norm is a product of function values over all inverse branches, and the trace is a sum of differential pullbacks by those branches. At $r=q^e$, a local factor $f(q)=q^n u(q)$ contributes norm order $n$ in $r$; the product of its unit factors is invariant under $q\mapsto\zeta_e q$ and hence is a holomorphic unit in $r$. For a differential $\sum_{n\ge0}a_nq^n dq$, the trace is
$$
\sum_{m\ge0}a_{(m+1)e-1}r^m dr.
$$
These computations prove meromorphic extension of norms and holomorphic extension of differential traces.

The divisor identities are
$$
\operatorname{div}(\operatorname{norm}_h f)=h_D\operatorname{div}(f),\qquad
\operatorname{div}(h^*g)=h^D\operatorname{div}(g)
$$
for nonzero functions. Thus both maps preserve principal divisors and descend to Picard groups. Abel's theorem identifies the Picard maps with the Jacobian maps. For the latter, forward change of variable and concatenation of lifted loops prove that the dual maps take periods to periods, so their quotient definitions are valid.

### Degree identities

On an unramified disk, every inverse branch pulls $h^*\lambda$ back to $\lambda$. Summing and extending across the finitely many branch values gives
$$
\operatorname{tr}_h h^*=d\operatorname{id}_{W_Y}.
$$
Dualizing yields $h_Jh^J=[d]$ on $\operatorname{Jac}(Y)$. On divisors, evaluating on $[y]$ and summing $e_x$ gives $h_Dh^D=d\operatorname{id}$, and hence $h_Ph^P=[d]$ on $\operatorname{Pic}^0(Y)$. The opposite-order divisor composition need not be scalar.

### Modular forms and the central sign

For a modular curve, $f\mapsto f(\tau)d\tau$ identifies weight-two cusp forms with holomorphic differentials. If $h$ is induced by $\alpha=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in GL_2^+(\mathbb Q)$, then
$$
\alpha'(\tau)=\frac{\det\alpha}{(c\tau+d)^2}
$$
proves compatibility of differential pullback with the weight-two slash operator. In a matrix-coset trace sum for $H=\alpha\Gamma_X\alpha^{-1}\subseteq\Gamma_Y$, each effective inverse branch occurs
$$
\kappa=[\Gamma_Y\cap\{\pm I\}:H\cap\{\pm I\}]
$$
times. Thus the raw matrix sum represents $\kappa$ times the geometric trace. The usual diagram with the unscaled trace holds when $\kappa=1$, as for the equal-center groups in the Hecke correspondences used here. This qualification prevents a change of matrix representatives from silently doubling a geometric map.

## Examples

- For the sphere, $W_X=0$ and $\operatorname{Jac}(X)=0$. Degree-zero divisors are all principal; for finite zeros and poles the corresponding function is a quotient of products of linear factors.
- For $E=\mathbb C/\Lambda$, integration of $dz$ identifies its Jacobian with $E$. Under this identification $j_0$ is the identity map.
- For multiplication $h=[m]$ on $E$ with $m\ne0$, $h^*dz=m\,dz$ and $\deg h=m^2$. The forward and reverse Jacobian maps both identify with $[m]$, so their composition is $[m^2]$.
- Changing a basepoint translates $j_{x_0}$ by a fixed Jacobian element. It does not change the group $\operatorname{Pic}^0(X)$ or the homomorphisms induced by a map of curves.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]
- [[08 - Arithmetic Geometry/Concepts/Abelian Varieties|Abelian Varieties]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension#Dual Basis|Dual Basis]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

The Jacobian, Picard, Abel and period-lattice statements were checked on original 200 dpi images of printed pp. 217–218 / PDF pp. 231–232. The source explicitly leaves the period theorem and Abel's theorem to a Riemann-surface reference; they are not proved by this note. The degree identities and modular differential diagrams were checked on printed pp. 227–228,232 / PDF pp. 241–242,246. The detailed norm/trace extension, degree arguments and center-factor qualification above are independent derivations, expanded in the corresponding numbered exercise notes.

This is an analytic account. A projective algebraic realization of the torus uses the additional polarization/projectivity theorem for Jacobians; construction of schemes, algebraic models over number fields and reduction in positive characteristic requires further inputs from Chapters 7–8. A general complex torus is not automatically an abelian variety.

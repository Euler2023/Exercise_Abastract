---
title: Étale Cohomology
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
created: 2026-01-19
source: "J. S. Milne, Lectures on Étale Cohomology, §§2, 5–9, 17, 19, 21, 24–27, printed/PDF pp. 16–24, 43–67, 116–130, 144–159"
source_status: partially-verified
status: not-started
---

# Étale Cohomology

## Motivation

The Zariski topology is usually too coarse to reproduce the topological invariants of a complex variety. Étale cohomology replaces ordinary open sets by algebraic “local isomorphisms”; it works in positive characteristic, retains Galois information, and supplies the cohomological framework for the Weil conjectures.

## The Étale Topology

> [!info] Definition (Étale Morphism)
> A morphism $f:X\to Y$ of schemes is **étale** if it is flat and unramified. In Milne's Noetherian/finite-type convention, unramified already includes finite type; for arbitrary schemes one normally states “flat and locally of finite presentation with vanishing relative differentials.”

Étale morphisms are algebraic analogues of local diffeomorphisms or unramified covering maps. This is an analogy, not a claim that every étale map is a topological covering of the underlying Zariski spaces.

> [!info] Definition (Étale Site)
> The **small étale site** $X_{\mathrm{ét}}$ has:
> - objects: étale morphisms $U\to X$;
> - morphisms: morphisms over $X$;
> - coverings: families $\{U_i\to U\}$ of étale maps whose images jointly cover $U$.

## Étale Sheaves and Cohomology

> [!info] Definition (Étale Sheaf)
> An étale sheaf $\mathcal F$ assigns data $\mathcal F(U)$ to each étale $U\to X$, contravariantly and with compatible gluing for étale coverings.

Important finite coefficient sheaves include $\underline{\mathbb Z/n\mathbb Z}$ and, when $n$ is invertible on $X$, $\mu_n$. The notation $\mathbb Z_\ell$ is best treated as the inverse system $(\mathbb Z/\ell^m\mathbb Z)_m$, not as an ordinary finite discrete sheaf.

> [!info] Definition (Cohomology)
> For a sheaf of abelian groups $\mathcal F$ on $X_{\mathrm{ét}}$,
> $$
> H^i_{\mathrm{ét}}(X,\mathcal F)=R^i\Gamma(X_{\mathrm{ét}},\mathcal F).
> $$

Milne constructs these as the right derived functors of global sections and records the associated long exact sequences [S8, §9, printed/PDF pp. 64–67].

## Fundamental Comparisons

1. **Complex comparison.** If $X/\mathbb C$ is nonsingular and $A$ is a finite abelian group, then
   $$
   H^i_{\mathrm{ét}}(X,A)\cong H^i(X(\mathbb C),A).
   $$
   Milne also notes the constructible-sheaf extension, while the proof uses substantial external analytic and algebraic-geometric input [S8, Thm. 21.1, printed/PDF pp. 130–134].

2. **A point is Galois cohomology.** For $x=\operatorname{Spec}k$, a sheaf corresponds to a discrete $G_k=\operatorname{Gal}(k^{\mathrm{sep}}/k)$-module $M$, and
   $$
   H^i_{\mathrm{ét}}(x,\mathcal F)\cong H^i_{\mathrm{cont}}(G_k,M).
   $$
   Thus higher cohomology of a general field-valued point need not vanish [S8, §9, printed/PDF p. 65].

3. **Geometric Galois action.** If $X/K$ and $\bar X=X\times_K\bar K$, then $G_K$ acts continuously on finite-coefficient cohomology and on the resulting $\ell$-adic vector spaces under the usual finiteness hypotheses.

4. **Finiteness.** Étale cohomology with constructible finite coefficients is finite under the finite-type and prime-to-characteristic hypotheses stated in the finiteness theorems. One must not replace these by an unrestricted claim for arbitrary sheaves.

## $\ell$-adic Cohomology

For $\ell\ne\operatorname{char}(k)$, the standard notation is
$$
H^i_{\mathrm{ét}}(X,\mathbb Z_\ell)
=\varprojlim_m H^i_{\mathrm{ét}}(X,\mathbb Z/\ell^m\mathbb Z),
$$
$$
H^i_{\mathrm{ét}}(X,\mathbb Q_\ell)
=H^i_{\mathrm{ét}}(X,\mathbb Z_\ell)\otimes_{\mathbb Z_\ell}\mathbb Q_\ell.
$$

For smooth proper $X/K$, these are finite-dimensional continuous $G_K$-representations. Tate twists and the choice of arithmetic versus geometric Frobenius must be recorded in formulas.

## Examples

> [!example] Example 1: Spectrum of a field
> For $x=\operatorname{Spec}k$,
> $$
> H^i_{\mathrm{ét}}(x,\mathbb Z/\ell^m\mathbb Z)
> \cong H^i_{\mathrm{cont}}(G_k,\mathbb Z/\ell^m\mathbb Z).
> $$
> If $k$ is separably closed, then $G_k=1$, so $H^0\cong\mathbb Z/\ell^m\mathbb Z$ and $H^i=0$ for $i>0$. The former note incorrectly asserted this vanishing for every field.

> [!example] Example 2: Projective line over a separably closed field
> $$
> H^0_{\mathrm{ét}}(\mathbb P^1,\mathbb Z_\ell)\cong\mathbb Z_\ell,
> \qquad H^1_{\mathrm{ét}}(\mathbb P^1,\mathbb Z_\ell)=0,
> $$
> $$
> H^2_{\mathrm{ét}}(\mathbb P^1,\mathbb Z_\ell)\cong\mathbb Z_\ell(-1).
> $$
> The Tate twist is essential when a Galois or Frobenius action is present.

> [!example] Example 3: Elliptic curve
> For an elliptic curve $E/\bar k$ with $\ell\ne\operatorname{char}(k)$,
> $$
> H^1_{\mathrm{ét}}(E,\mathbb Z_\ell)\cong
> \operatorname{Hom}_{\mathbb Z_\ell}(T_\ell(E),\mathbb Z_\ell),
> $$
> a free module of rank $2$. Over a nonclosed base the two sides carry compatible Galois actions; $H^1$ is the dual of the Tate module, not literally the Tate module without a convention.

## Weil Conjectures Through Cohomology

Let $X_0$ be a smooth projective variety of dimension $d$ over $\mathbb F_q$, let $X=X_0\times_{\mathbb F_q}\bar{\mathbb F}_q$, and let $F$ denote Milne's $q$-power Frobenius endomorphism. Put
$$
P_r(X_0,t)=\det\!\left(1-Ft\mid H^r_{\mathrm{ét}}(X,\mathbb Q_\ell)\right).
$$

Then the cohomological formulas are:

1. **Rationality**
   $$
   Z(X_0,t)=\prod_{r=0}^{2d}P_r(X_0,t)^{(-1)^{r+1}}.
   $$

2. **Functional equation**
   $$
   Z\!\left(X_0,\frac{1}{q^d t}\right)
   =\pm q^{d\chi/2}t^\chi Z(X_0,t).
   $$

3. **Riemann-hypothesis bound.** Every complex conjugate of an eigenvalue of $F$ on $H^r$ has absolute value $q^{r/2}$; equivalently, the roots of $P_r(t)$ have absolute value $q^{-r/2}$.

Milne formally derives rationality from the Lefschetz trace formula and the functional equation from Poincaré duality [S8, Thms. 27.6 and 27.12, printed/PDF pp. 156–159]. Poincaré duality is stated without an internal proof, and the final Riemann-hypothesis route retains explicitly omitted steps [S8, Thm. 24.1, printed/PDF pp. 144–146; Thm. 27.15, printed/PDF p. 159; proof-status note, printed/PDF p. 196].

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Schemes|Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/Zeta Functions of Varieties|Zeta Functions of Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Tate Conjecture|Tate Conjecture]]
- [[05 - Galois Theory/Galois Theory Hub|Galois Theory]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Eight-source audit: Milne directly covers étale morphisms, the small étale site, sheaves, derived-functor cohomology, the identification with continuous Galois cohomology for $\operatorname{Spec}k$, comparison over $\mathbb C$, finiteness, proper base change, duality, trace formulas, Frobenius, and the Weil-conjecture architecture [S8, §§2, 5–9, 17, 19, 21, 24–27]. This resolves the former absence of a core source and upgrades the note to `partially-verified`. It is not `verified`: the étale fundamental-group classification, proper base change, comparison foundations, and Poincaré duality rely on external results or sketches, and Milne explicitly marks omissions in the final Weil proof. The formulas above were checked on the rendered original pages, with coefficient rings, Frobenius convention, and Tate twists restored.

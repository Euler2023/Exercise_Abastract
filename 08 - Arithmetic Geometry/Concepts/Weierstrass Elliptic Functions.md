---
title: Weierstrass Elliptic Functions
aliases:
  - Weierstrass p Function
  - Elliptic Functions of a Lattice
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-10-24
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Section 1.4, printed pp. 31–34, PDF pp. 46–49; Proposition 1.4.1 and Corollary 1.4.2, printed pp. 32–34, PDF pp. 47–49"
source_status: verified
status: not-started
---

# Weierstrass Elliptic Functions

## Definition

> [!info] Elliptic functions and the Weierstrass function
> For a lattice $\Lambda\subset\mathbb C$, an elliptic function is a meromorphic function $f$ on $\mathbb C$ with $f(z+\omega)=f(z)$ for all $\omega\in\Lambda$. It descends to a meromorphic function on $\mathbb C/\Lambda$.
> $$
> \wp_\Lambda(z)=\frac1{z^2}+\sum_{\omega\in\Lambda-\{0\}}
> \left(\frac1{(z-\omega)^2}-\frac1{\omega^2}\right),\qquad z\notin\Lambda.
> $$
> Define $G_k(\Lambda)=\sum_{\omega\ne0}\omega^{-k}$ for even $k\ge4$, $g_2=60G_4$ and $g_3=140G_6$.

## Intuition

Subtracting $1/\omega^2$ removes the divergent quadratic tail, making the summand decay cubically in the lattice variable. The function has one double pole on the torus; together with its derivative it supplies coordinates on a nonsingular cubic curve.

## Key Properties

1. **Convergence and parity.** On a compact set of $z$ away from $\Lambda$, the large-$\omega$ summands are bounded by $C|\omega|^{-3}$. A real rank-two lattice has $O(n)$ points in each unit-width shell of radius $n$, so the majorant converges. This gives normal convergence and termwise differentiation. Replacing $\omega$ by $-\omega$ gives $\wp(-z)=\wp(z)$, while
   $$
   \wp'_\Lambda(z)=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}
   $$
   is odd and lattice-periodic. Thus $\wp(z+\omega_j)-\wp(z)$ is constant for a basis period $\omega_j$; evaluating at $z=-\omega_j/2$, which is not a lattice point, shows the constant is zero. This proves ellipticity.
2. **Zeros and poles.** A nonzero elliptic function has sum of residues zero and equally many zeros and poles, with multiplicities. Integrate $f$ or $f'/f$ along a translated fundamental parallelogram avoiding poles and zeros; opposite-edge integrals cancel by periodicity, and the residue/argument principle gives the conclusions. In particular $\wp$ has degree $2$ and $\wp'$ has degree $3$.
3. **Cubic relation.** Proposition 1.4.1 states
   $$
   (\wp')^2=4\wp^3-g_2\wp-g_3.
   $$
   Its Laurent calculation starts with $\wp=z^{-2}+3G_4z^2+5G_6z^4+O(z^6)$ and $\wp'=-2z^{-3}+6G_4z+20G_6z^3+O(z^5)$. Both sides have principal/constant terms $4z^{-6}-24G_4z^{-2}-80G_6$. Their difference is entire and elliptic, hence constant, and tends to zero at $0$, so is zero.
4. **Nonsingularity.** The three nonzero two-torsion points have $\wp'=0$. Their $\wp$-values are distinct: otherwise a degree-two function would take the same value at two distinct points each of multiplicity at least two. These are exactly the three roots of $4x^3-g_2x-g_3$, so $g_2^3-27g_3^2\ne0$. The map $z\mapsto(\wp(z),\wp'(z))$, with $0$ mapped to the point at infinity, identifies the torus with this nonsingular cubic, as established in the source.
5. **Scaling.** Substitution in the lattice sums gives
   $$
   \wp_{m\Lambda}(mz)=m^{-2}\wp_\Lambda(z),\quad
   \wp'_{m\Lambda}(mz)=m^{-3}\wp'_\Lambda(z),\quad
   g_2(m\Lambda)=m^{-4}g_2(\Lambda),\quad
   g_3(m\Lambda)=m^{-6}g_3(\Lambda).
   $$

## Examples

- For $\Lambda_i=i\mathbb Z+\mathbb Z$, multiplication by $i$ preserves the lattice. The weight-six scaling identity forces $g_3(\Lambda_i)=0$, and nonsingularity forces $g_2(\Lambda_i)\ne0$.
- For $\rho=e^{2\pi i/3}$ and $\Lambda_\rho=\rho\mathbb Z+\mathbb Z$, multiplication by $\rho$ forces $g_2(\Lambda_\rho)=0$, and nonsingularity gives $g_3(\Lambda_\rho)\ne0$.
- Evaluating $\wp$ at a nonzero marked torsion point and applying the scaling identity gives homogeneous weight-two functions used in Section 1.5.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves (Arithmetic)]]

## Source and Proof Status

The original definitions, scaling identities, Proposition 1.4.1 and Corollary 1.4.2 were checked at 200 dpi. The book sketches the cubic/nonsingularity proof and assigns periodicity and the elliptic-function contour facts as Exercises 1.4.1–1.4.2; the corresponding vault proofs are independent. The contour arguments import the residue theorem and argument principle, and bounded entire functions are treated using Liouville's theorem. The two-torsion and Laurent explanations above supply the local justification used here; the general uniformization of every complex elliptic curve is not reproved.

**Normalization boundary.** Diamond–Shurman's $\Delta_{\mathrm{DS}}=g_2^3-27g_3^2$ has leading term $(2\pi)^{12}q$. The usual normalized modular form in the existing Discriminant Function note is $\Delta_{\mathrm{norm}}=q+\cdots$, with $\Delta_{\mathrm{DS}}=(2\pi)^{12}\Delta_{\mathrm{norm}}$. The polynomial discriminant of $4x^3-g_2x-g_3$ is $16\Delta_{\mathrm{DS}}$.

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

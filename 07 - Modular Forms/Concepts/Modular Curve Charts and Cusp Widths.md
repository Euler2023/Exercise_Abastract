---
title: Modular Curve Charts and Cusp Widths
aliases:
  - Local Coordinates on Modular Curves
  - Elliptic Point Periods and Cusp Widths
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-10-28
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Sections 2.1–2.4, printed pp. 45–63, PDF pp. 60–78; elliptic charts, printed pp. 49–51, PDF pp. 64–66; cusp widths and charts, printed pp. 59–61, PDF pp. 74–76"
source_status: verified
status: not-started
---

# Modular Curve Charts and Cusp Widths

## Definition

> [!info] Effective stabilizers, periods, and widths
> Let $G=SL_2(\mathbb Z)$, let $\Gamma\subseteq G$ be a congruence subgroup, and put $\mathcal H=\{z\in\mathbb C:\operatorname{Im}z>0\}$. Both $I$ and $-I$ act as the identity fractional linear transformation. Write $\widehat\Gamma=\{\pm I\}\Gamma$.
>
> For $\tau\in\mathcal H$, the stabilizer is $\Gamma_\tau=\{g\in\Gamma:g\tau=\tau\}$. Its **effective period** is
> $$
> e_\tau=\bigl|\{\pm I\}\Gamma_\tau/\{\pm I\}\bigr|
> =\frac{|\Gamma_\tau|}{|\Gamma\cap\{\pm I\}|}.
> $$
> A point is **elliptic** precisely when $e_\tau>1$. The source writes $h_\tau$ for this period; here $e_\tau$ distinguishes it from a cusp width.
>
> A **cusp** is a $\Gamma$-orbit of $s\in\mathbb P^1(\mathbb Q)=\mathbb Q\cup\{\infty\}$. Choose $\delta\in G$ with $\delta(s)=\infty$, and put $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Its **width** $h_s$ is the least positive integer $h$ for which $\pm T^h\in\delta\Gamma\delta^{-1}$ for at least one choice of sign. Equivalently,
> $$
> h_s=[G_\infty:(\delta\widehat\Gamma\delta^{-1})_\infty]
> =[G_s:\{\pm I\}\Gamma_s].
> $$
> Brackets denote a subgroup index. Normality of the denominator is not needed to define this index.

## Intuition

A small disk about an elliptic point contains $e_\tau$ sectors that represent the same quotient points. A power map joins those sectors into one coordinate disk. At a cusp, identified points differ by translations of length $h_s$; an exponential joins the strips and sends the added cusp to the center of a disk. Thus a period counts identified sectors, whereas a width measures the number of unit strips before an identification occurs.

## Key Properties

### Quotient topology and local separation

Give $Y(\Gamma)=\Gamma\backslash\mathcal H$ the quotient topology. Its projection $\pi$ is open because, for open $O\subseteq\mathcal H$,
$$
\pi^{-1}(\pi(O))=\bigcup_{g\in\Gamma}g(O)
$$
is open. This conclusion uses the group action by homeomorphisms, rather than the definition of a quotient topology alone.

Proposition 2.1.1 supplies neighborhoods $U_1,U_2$ of any $\tau_1,\tau_2\in\mathcal H$ such that $g(U_1)\cap U_2\ne\varnothing$ implies $g\tau_1=\tau_2$. In particular, a sufficiently small neighborhood $U$ of $\tau$ satisfies
$$
g(U)\cap U\ne\varnothing\ \Longrightarrow\ g\in\Gamma_\tau.
$$
It has no elliptic point other than possibly $\tau$: a nonidentity real fractional linear transformation fixing $\tau$ cannot fix another point in $\mathcal H$, since its fixed-point polynomial has conjugate nonreal roots. The finite cyclic stabilizer theorem is proved through §2.3; the vault also gives an independent proof in [[07 - Modular Forms/Exercises/Exercise MF2 - Fundamental Domain|Exercise MF2]].

### Interior coordinates

For a center $\tau_0\in\mathcal H$ define
$$
\delta_{\tau_0}(z)=\frac{z-\tau_0}{z-\overline{\tau_0}},\qquad
\psi(z)=\delta_{\tau_0}(z)^{e_{\tau_0}}.
$$
The first map sends $\tau_0$ to $0$ and its conjugate to $\infty$. Conjugating a stabilizer element by this map gives multiplication by a root of unity. The effective stabilizer consists of all $e_{\tau_0}$th roots of unity, so, on a sufficiently small open $U$,
$$
\pi(z_1)=\pi(z_2)\ \Longleftrightarrow\ \psi(z_1)=\psi(z_2).
$$
Thus $\varphi(\pi(z))=\psi(z)$ is a well-defined bijection $\pi(U)\to\psi(U)$. The nonconstant holomorphic map $\psi$ is open by the complex Open Mapping Theorem. Since $\pi|_U$ is an open continuous surjection, it is a quotient map; $\varphi\circ\pi=\psi$ gives continuity, and $\varphi(\pi(O))=\psi(O)$ for open $O\subseteq U$ gives openness. Therefore $\varphi$ is a homeomorphism, including at a branched center.

### Cusp topology and coordinates

Put $\mathcal H^*=\mathcal H\cup\mathbb P^1(\mathbb Q)$. Besides the ordinary open subsets of $\mathcal H$, use neighborhoods
$$
\alpha(N_M\cup\{\infty\}),\qquad
N_M=\{z\in\mathcal H:\operatorname{Im}z>M\},\quad
M>0,\quad \alpha\in G.
$$
This is the cusp topology; it is not the subspace topology from the Riemann sphere. Give $X(\Gamma)=\Gamma\backslash\mathcal H^*$ the quotient topology.

The width is finite because $\widehat\Gamma$ has finite index in $G$ and the intersection of a subgroup with a subgroup of finite index has finite index. Conjugation identifies $(G_s,\{\pm I\}\Gamma_s)$ with the corresponding pair at $\infty$, proving the second index formula and independence from $\delta$. Simultaneous conjugation preserves these indices, so widths depend only on the cusp in $X(\Gamma)$.

For $U=\delta^{-1}(N_2\cup\{\infty\})$ use
$$
\psi(z)=\exp\bigl(2\pi i\delta(z)/h_s\bigr),\qquad \psi(s)=0.
$$
Its image is the disk $|q|<e^{-4\pi/h_s}$. If an integral determinant-one matrix takes a point of $N_2$ to another point of $N_2$, its lower left entry is zero: for $c\ne0$,
$$
\operatorname{Im}(gz)=\frac{\operatorname{Im}z}{|cz+d|^2}
\le\frac1{c^2\operatorname{Im}z}<\frac12.
$$
It is therefore a translation up to sign. It follows that the fibers of $\psi$ are exactly the fibers of $\pi|_U$. The exponential is open at finite points; an open neighborhood of the added cusp contains a full horoball tail, whose image contains a disk about $0$. Hence $\psi$ is continuous and open also at the cusp, and the same quotient argument produces a homeomorphism $\varphi:\pi(U)\to\psi(U)$.

These charts make $X(\Gamma)$ a compact Riemann surface. Source boundaries for this theorem are recorded below.

### Maps induced by rational matrices

Suppose $\gamma\in GL_2^+(\mathbb Q)$ and $\gamma\Gamma_1\gamma^{-1}\subseteq\Gamma_2$. Then $\Gamma_1z\mapsto\Gamma_2\gamma z$ is well defined on $\mathcal H^*$.

At an interior point $\tau_2=\gamma\tau_1$, the straightened map fixes $0$ and $\infty$, so it is $w\mapsto\eta w$ with $\eta\ne0$. Stabilizer inclusion implies $e_1\mid e_2$. In the quotient coordinates the map is therefore
$$
q_2=\eta^{e_2}q_1^{e_2/e_1}.
$$
At cusps $s_2=\gamma s_1$, choose $\delta_j(s_j)=\infty$. Then $\delta_2\gamma\delta_1^{-1}$ acts as $z\mapsto\lambda z+\mu$ with $\lambda>0$. Conjugating a source translation of length $h_1$ gives a target stabilizer translation of length $\lambda h_1$. Consequently $m=\lambda h_1/h_2$ is a positive integer, and
$$
q_2=e^{2\pi i\mu/h_2}q_1^m.
$$
Both formulas are holomorphic at $q_1=0$. The full independent proof is archived with Exercise 2.4.7; the source assigns this assertion as an exercise.

## Examples

- For $G$, the matrix $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ fixes $i$ and has matrix order $4$, while $e_i=2$. A quotient coordinate is $((z-i)/(z+i))^2$.
- For $G$, $ST$ fixes $\rho=e^{2\pi i/3}$ and has matrix order $6$, while $e_\rho=3$. A coordinate is $((z-\rho)/(z-\bar\rho))^3$.
- At $\infty$, the full modular group has width $1$, so the coordinate is $q=e^{2\pi iz}$.
- For $\Gamma_0(N)$, the cusp $\infty$ has width $1$ because $T\in\Gamma_0(N)$. The cusp $0$ has width $N$: conjugating $T^m$ by $S$ gives $\begin{pmatrix}1&0\\-m&1\end{pmatrix}$, which belongs to $\Gamma_0(N)$ precisely when $N\mid m$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curves and Moduli|Modular Curves and Moduli]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

Definitions of the effective period, straightening and wrapping maps, cusp topology, and cusp width were checked on the original page images: printed pp. 49–50 / PDF pp. 64–65 and printed pp. 58–62 / PDF pp. 73–77. Proposition 2.1.1 and its proof are on printed p. 46 / PDF p. 61. The source's compactness and separation proof for $X(\Gamma)$ is Proposition 2.4.2, printed pp. 58–59 / PDF pp. 73–74; its chart construction and transition formulas continue through printed p. 61 / PDF p. 76.

Several steps are assigned as Exercises 2.1.1–2.4.7, rather than supplied as full proofs in the text. The detailed quotient arguments, width arguments, examples, and induced-map formulas above are independent derivations. Imported inputs are finite cyclic stabilizers (proved in the text through §2.3 and independently in MF2), the complex Open Mapping Theorem, and elementary subgroup-index and compactness facts. No algebraic model, scheme structure, or fine moduli interpretation is established by these analytic coordinates.

The source's Exercise 2.3.5(b) reverses the direction of the map $s(\tau)$ from Exercise 2.1.3(c); the existing MF2 note preserves that wording and records the inverse needed to correct it. The local-coordinate constructions here do not require that mistaken direction.

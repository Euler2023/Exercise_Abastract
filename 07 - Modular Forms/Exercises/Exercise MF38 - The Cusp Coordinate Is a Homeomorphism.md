---
title: "Exercise MF38: The Cusp Coordinate Is a Homeomorphism"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.4, Exercise 2.4.5, printed p. 62, PDF p. 77; cusp chart construction, printed pp. 59–61, PDF pp. 74–76"
source_refs:
  - "S7/ch-2/sec-4/ex-5"
created: 2026-10-28
---

# Exercise MF38: The Cusp Coordinate Is a Homeomorphism

## Problem Statement

> [!question] Original Exercise 2.4.5
> Explain why $\varphi:\pi(U)\longrightarrow V$ as defined in the section is a homeomorphism.
>
> **Referenced construction.** Let $\Gamma$ be a congruence subgroup of $SL_2(\mathbb Z)$, let $s$ represent a cusp, and choose $\delta\in SL_2(\mathbb Z)$ with $\delta(s)=\infty$. Write $h=h_{s,\Gamma}$ and set
> $$
> U=\delta^{-1}(\mathcal N_2\cup\{\infty\}),\qquad
> \mathcal N_M=\{z\in\mathcal H:\operatorname{Im}z>M\}.
> $$
> In the cusp topology, $\mathcal N_M\cup\{\infty\}$ is a neighborhood basis at $\infty$, and $\delta$ is a homeomorphism of $\mathcal H^*$. Define
> $$
> \psi(\tau)=\exp(2\pi i\delta(\tau)/h)\quad(\tau\ne s),
> \qquad \psi(s)=0,\qquad V=\psi(U).
> $$
> The projection is $\pi:\mathcal H^*\to X(\Gamma)$. The map $\varphi$ is defined by $\varphi\circ\pi|_U=\psi$.

## Hints

> [!hint]- Hint 1
> First show that the fibers of $\psi$ on $U$ are exactly the fibers of $\pi|_U$. A matrix in $SL_2(\mathbb Z)$ carrying one point of $\mathcal N_2$ to another must be a translation as a fractional linear transformation.

> [!hint]- Hint 2
> Show that $\psi$ is continuous and open, including at $s$. An open neighborhood of $s$ contains the inverse image of a whole high horoball.

> [!hint]- Hint 3
> The restricted projection $\pi|_U$ is an open quotient map. Use this to descend continuity, and use openness of $\psi$ to prove that $\varphi$ is open.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution. For ordinary interior points, we use the open mapping theorem for a nonconstant holomorphic function.
>
> Put $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. The width definition gives
> $$
> \{\pm I\}(\delta\Gamma\delta^{-1})_\infty
> =\{\pm T^{nh}:n\in\mathbb Z\}.
> $$
> In particular, every translation by $nh$ is represented by an element of $\delta\Gamma\delta^{-1}$, with either sign permitted.
>
> **The fibers.** Suppose $\beta=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$ takes $z_1\in\mathcal N_2$ to $z_2\in\mathcal N_2$. If $c\ne0$, the imaginary-part formula gives
> $$
> \operatorname{Im}z_2=\frac{\operatorname{Im}z_1}{|cz_1+d|^2}
> \leq\frac1{\operatorname{Im}z_1}<\frac12,
> $$
> contrary to $\operatorname{Im}z_2>2$. Therefore $c=0$, and $\beta=\pm T^n$ for an integer $n$.
>
> For $\tau_1,\tau_2\in U\setminus\{s\}$, an equality $\pi(\tau_1)=\pi(\tau_2)$ means $\tau_1=\eta\tau_2$ for some $\eta\in\Gamma$. Apply the preceding observation to $\beta=\delta\eta\delta^{-1}$. Its translation length is a multiple of $h$, so
> $$
> \pi(\tau_1)=\pi(\tau_2)
> \quad\Longleftrightarrow\quad
> \delta(\tau_1)-\delta(\tau_2)\in h\mathbb Z
> \quad\Longleftrightarrow\quad
> \psi(\tau_1)=\psi(\tau_2).
> $$
> Conversely, each translation in $h\mathbb Z$ is represented in $\delta\Gamma\delta^{-1}$, proving the reverse implication as well. The only cusp in $U$ is $s$, and the exponential is never zero at an interior point. Thus the fiber statement also holds when a point is $s$. It proves that $\varphi$ exists and is bijective.
>
> **Continuity and openness of $\psi$.** The image is the open disk
> $$
> V=\{q\in\mathbb C:|q|<e^{-4\pi/h}\}.
> $$
> The exponential is holomorphic and open on $\mathcal N_2$. At the cusp, the identity
> $$
> \left|e^{2\pi iz/h}\right|=e^{-2\pi\operatorname{Im}z/h}
> $$
> proves continuity: a sufficiently high horoball maps inside any prescribed disk about zero. If an open set $O\subseteq U$ contains $s$, then $\delta(O)$ contains $\mathcal N_M\cup\{\infty\}$ for some $M>2$. Therefore $\psi(O)$ contains the disk $|q|<e^{-2\pi M/h}$ about zero. At every other point of $\psi(O)$, openness follows from the ordinary open mapping theorem. Thus $\psi$ is open on all of $U$.
>
> **Descent to the quotient.** Since the action of $\Gamma$ on $\mathcal H^*$ is by homeomorphisms,
> $$
> \pi^{-1}(\pi(O))=\bigcup_{\eta\in\Gamma}\eta(O)
> $$
> is open whenever $O$ is open. Hence $\pi$ is open. The set $U$ is open, so $p=\pi|_U:U\to\pi(U)$ is also a continuous open surjection and therefore a quotient map. For every open $W\subseteq V$,
> $$
> p^{-1}(\varphi^{-1}(W))=\psi^{-1}(W)
> $$
> is open, proving continuity of $\varphi$. If $A\subseteq\pi(U)$ is open, then $p^{-1}(A)$ is open in $U$, and
> $$
> \varphi(A)=\psi(p^{-1}(A))
> $$
> is open by openness of $\psi$. Thus $\varphi$ is a continuous open bijection, so its inverse is continuous and it is a homeomorphism.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]
- [[07 - Modular Forms/Concepts/Modular Curves and Moduli|Modular Curves and Moduli]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** The problem and chart construction were checked on original rendered pages [S7, Exercise 2.4.5, printed p. 62 / PDF p. 77; construction, printed pp. 59–61 / PDF pp. 74–76]. The full topological argument above is independently supplied.
- **Source issue in the surrounding text:** On printed p. 61 / PDF p. 76, the sentence following the commuting diagram refers to a coordinate neighborhood in $Y(\Gamma)$. At the adjoined cusp this must be $X(\Gamma)$, because the cusp is absent from $Y(\Gamma)$. The exercise's printed wording is unchanged above.
- **Method boundary:** Continuity of a bijection alone does not establish this conclusion. The quotient property proves continuity, while openness at the cusp proves continuity of the inverse.
- **Sign convention:** Allowing $\pm I$ in the width definition accounts for groups that do not contain $-I$; a matrix and its negative induce the same fractional linear transformation.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

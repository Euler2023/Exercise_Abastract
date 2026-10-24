---
title: "Exercise LA587: Determinant Formula for the Weil Pairing"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.3, Exercise 1.3.3(a)–(d), printed p. 31, PDF p. 46"
source_refs:
  - "S7/ch-1/sec-3/ex-3"
created: 2026-10-24
---

# Exercise LA587: Determinant Formula for the Weil Pairing

## Problem Statement

> [!question] Original Exercise 1.3.3
> (a) Show that the Weil pairing is independent of which basis $\{\omega_1,\omega_2\}$ is used, provided $\omega_1/\omega_2\in\mathcal H$.
>
> (b) Show that the Weil pairing is bilinear, alternating, and nondegenerate. (Remember that the group $\boldsymbol\mu_N$ is multiplicative.)
>
> (c) Show that the Weil pairing is compatible with $N$. This means that for positive integers $N$ and $d$, the diagram
> $$
> \begin{array}{ccc}
> E[dN]\times E[dN]&\xrightarrow{\ e_{dN}(\cdot,\cdot)\ }&\boldsymbol\mu_{dN}\\
> {\scriptstyle d(\cdot,\cdot)}\downarrow&&\downarrow{\scriptstyle (\cdot)^d}\\
> E[N]\times E[N]&\xrightarrow{\ e_N(\cdot,\cdot)\ }&\boldsymbol\mu_N
> \end{array}
> $$
> commutes, where the vertical maps are suitable multiplications by $d$. (A hint for this exercise is at the end of the book.)
>
> (d) Let $\Lambda$ and $\Lambda'$ be lattices with $m\Lambda=\Lambda'$ for some $m\in\mathbb C$. Show that the isomorphism of complex elliptic curves $\mathbb C/\Lambda\xrightarrow\sim\mathbb C/\Lambda'$ given by $z+\Lambda\mapsto mz+\Lambda'$ preserves the Weil pairing.
>
> **Definition used in the source:** Put $E=\mathbb C/\Lambda$, $\boldsymbol\mu_N=\{u\in\mathbb C:u^N=1\}$, and $\zeta_N=e^{2\pi i/N}$. If
> $$
> P=\frac{a\omega_1+b\omega_2}{N}+\Lambda,
> \qquad Q=\frac{c\omega_1+e\omega_2}{N}+\Lambda,
> $$
> then $e_N(P,Q)=\zeta_N^{ae-bc}$; coordinates are taken modulo $N$. This definition appears on printed p. 30 / PDF p. 45.

## Hints

> [!hint]- Hint 1
> A change between oriented lattice bases has determinant $1$. Changing the basis multiplies the coordinate matrix on the right by its inverse.

> [!hint]- Hint 2
> Expand the determinant in each row to prove bilinearity. Pair a nonzero coordinate vector with $(0,1)$ or $(1,0)$ to detect it.

> [!hint]- Hint 3 — source appendix
> In part (c), the entire exercise takes place in the same $E$. Multiplication sends $P+\Lambda$ to $dP+\Lambda$, not to $dP+d\Lambda$ [Appendix A, printed p. 414 / PDF p. 425]. Rewrite the resulting points with denominator $N$ before using $e_N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Well-defined coordinates.** Changing $a,b,c,e$ by multiples of $N$ changes $ae-bc$ by a multiple of $N$, so the exponential is unchanged. This first removes any dependence on the chosen integer representatives.
>
> **(a) Oriented basis independence.** Let $\Omega$ be the column $(\omega_1,\omega_2)^{\mathsf T}$ and let $\Omega'=A\Omega$ be another normalized basis. Lemma 1.3.1 gives $A\in\operatorname{SL}_2(\mathbb Z)$. If $C=\begin{pmatrix}a&b\\c&e\end{pmatrix}$ is a coordinate matrix for $(P,Q)$, then
> $$
> \begin{pmatrix}P\\Q\end{pmatrix}
> =\frac1N C\Omega
> =\frac1N CA^{-1}\Omega'\pmod\Lambda.
> $$
> Thus the new coordinate matrix is $CA^{-1}$ modulo $N$ and
> $$
> \det(CA^{-1})=\det C\det A^{-1}=\det C.
> $$
> The two definitions of $e_N$ agree.
>
> **(b) Bilinearity, alternation, nondegeneracy.** For coordinate row vectors $u,v,w$,
> $$
> \det\begin{pmatrix}u+v\\w\end{pmatrix}
> =\det\begin{pmatrix}u\\w\end{pmatrix}
> +\det\begin{pmatrix}v\\w\end{pmatrix}.
> $$
> Exponentiating turns the sum into a product. Hence
> $$
> e_N(P+P',Q)=e_N(P,Q)e_N(P',Q),
> $$
> and the same calculation in the second row proves bilinearity in the second argument. Equal rows have determinant zero, so $e_N(P,P)=1$. Interchanging rows also gives $e_N(Q,P)=e_N(P,Q)^{-1}$.
>
> Suppose $e_N(P,Q)=1$ for every $Q\in E[N]$, and write $P$ with coordinates $(a,b)$. Choosing $Q=\omega_2/N+\Lambda$ gives $\zeta_N^a=1$, so $a\equiv0\pmod N$. Choosing $Q=\omega_1/N+\Lambda$ gives $\zeta_N^{-b}=1$, so $b\equiv0\pmod N$. Therefore $P=0$. Skew symmetry gives nondegeneracy in the other argument. For $N=1$ both groups are trivial and the same conclusion holds.
>
> **(c) Level compatibility.** Take arbitrary $P,Q\in E[dN]$ and choose integers $a,b,c,e$ with
> $$
> P=\frac{a\omega_1+b\omega_2}{dN}+\Lambda,
> \qquad Q=\frac{c\omega_1+e\omega_2}{dN}+\Lambda.
> $$
> Multiplication in the fixed torus gives
> $$
> dP=\frac{a\omega_1+b\omega_2}{N}+\Lambda,
> \qquad dQ=\frac{c\omega_1+e\omega_2}{N}+\Lambda.
> $$
> Consequently
> $$
> e_N(dP,dQ)
> =\exp\!\left(\frac{2\pi i(ae-bc)}{N}\right)
> =\left[\exp\!\left(\frac{2\pi i(ae-bc)}{dN}\right)\right]^d
> =e_{dN}(P,Q)^d.
> $$
> The right vertical map lands in $\boldsymbol\mu_N$ since $(u^d)^N=u^{dN}=1$. This proves commutativity with both left coordinates multiplied by $d$ and the right coordinate raised to the $d$th power.
>
> There is no extra factor $d$ in the exponent: the lower pairing is $e_N$, rather than $e_{dN}$. For example, with $N=d=2$, $P=\omega_1/4+\Lambda$ and $Q=\omega_2/4+\Lambda$, the upper pairing is $i$, its square is $-1$, and the lower pairing is $e_2(\omega_1/2,\omega_2/2)=-1$.
>
> **(d) Isomorphism invariance.** Since $m\Lambda=\Lambda'$ is a lattice, $m\ne0$. The basis $(m\omega_1,m\omega_2)$ of $\Lambda'$ has the same quotient $\omega_1/\omega_2\in\mathcal H$. Under the isomorphism, the images of $P,Q\in E[N]$ have exactly the same coordinate matrix $C$ in this scaled basis. Their Weil pairing is therefore the same $\zeta_N^{\det C}$. Part (a) makes the conclusion independent of the normalized basis subsequently chosen for $\Lambda'$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]

## Notes

- **Source status:** The determinant definition, all four subparts and the unnumbered commutative diagram were visually checked at [Diamond–Shurman, Ch. 1, §1.3, printed pp. 30–31, PDF pp. 45–46]. The source appendix hint was checked at [Appendix A, printed p. 414, PDF p. 425]. The solution is an independent determinant calculation.
- **Source diagram:** The searchable MathJax array above transcribes the original unnumbered diagram, with its two multiplication maps made explicit in the solution. No bitmap screenshot is retained.
- **Notation:** The multiplicative group $\boldsymbol\mu_N$ of all $N$th roots of unity differs from the book's symbol $\mu_3=e^{2\pi i/3}$ for one specified cube root.
- **Boundary:** Part (d) concerns isomorphisms, not arbitrary isogenies. A general isogeny need not preserve the pairing without a degree factor. Reversing the orientation of a lattice basis would invert the pairing.

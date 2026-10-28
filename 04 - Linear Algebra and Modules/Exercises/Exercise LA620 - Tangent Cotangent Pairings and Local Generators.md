---
title: "Exercise LA620: Tangent Cotangent Pairings and Local Generators"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.3, printed p. 270, PDF p. 283"
source_refs:
  - "S7/ch-7/sec-2/ex-3"
created: 2026-10-28
---

# Exercise LA620: Tangent Cotangent Pairings and Local Generators

## Problem Statement

> [!question] Original Exercise 7.2.3
> (a) In the proof of Lemma 7.2.2, show that $\nabla\varphi(P)$ is in the row space of $[D_j\varphi_i(P)]$. (Hints for this exercise are at the end of the book.)
>
> (b) In the proof of Lemma 7.2.2, show that the pairing is perfect.
>
> (c) Let $E$ be an elliptic curve defined by a Weierstrass polynomial $E$, and let $P=(x,y)$ be a point of $E$. Explain how the proof of Lemma 7.2.2 shows that $x-x_P+m_P^2$ spans $m_P/m_P^2$ if $D_2E(P)\ne0$ and $y-y_P+m_P^2$ spans it if $D_1E(P)\ne0$.
>
> (d) In the discussion before Proposition 7.2.3, show that $m_P\cap M_P^2=m_P^2$.

> **Context and notation.** Lemma 7.2.2, printed p. 263 / PDF p. 276, states $\dim_{\bar k}(m_P/m_P^2)=1$ at a nonsingular curve point. Its pairing is
> $$
> m_P/m_P^2\times T_P(C)\longrightarrow\bar k,\qquad
> ([f],v)\longmapsto\nabla f(P)\cdot v,
> $$
> where $T_P(C)=\ker[D_j\varphi_i(P)]$. The local ideal is $M_P=m_P\bar k[C]_P$.

## Hints

> [!hint]- Hint 1
> Differentiate an ideal expression $\varphi=\sum f_i\varphi_i$.

> [!hint]- Hint 2
> Identify the cotangent space as a quotient of coordinate linear forms by the Jacobian row space.

> [!hint]- Hint 3
> For (d), invert $t$ modulo the maximal ideal before clearing the localization.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Put $K=\bar k$, $B=K[x_1,\ldots,x_n]$, $A=B/I$, and $q=(x_1-p_1,\ldots,x_n-p_n)\subset B$. Then $m=q/I$ and $m^2=(q^2+I)/I$.
>
> **(a)** Write $\varphi=\sum_i f_i\varphi_i\in I$. The product rule gives
> $$
> \nabla\varphi(P)=\sum_i\bigl(f_i(P)\nabla\varphi_i(P)+\varphi_i(P)\nabla f_i(P)\bigr)
> =\sum_i f_i(P)\nabla\varphi_i(P).
> $$
> This is in the stated row space.
>
> **(b)** The linear Taylor-term map identifies $q/q^2$ with $K^n$, viewed as row vectors. Under this identification the image of $I$ is precisely the row space $W$ of the Jacobian: (a) gives one inclusion and the generators $\varphi_i$ give the other. Hence
> $$
> m/m^2\simeq K^n/W,\qquad T_P(C)=W^\perp.
> $$
> The displayed pairing is therefore the ordinary dot pairing between $K^n/W$ and $W^\perp$. If a row vector annihilates $W^\perp$, it belongs to $(W^\perp)^\perp=W$ by finite-dimensional linear algebra. Conversely a nonzero column in $W^\perp$ has some nonzero coordinate, and the corresponding coordinate row detects it. This proves nondegeneracy on both sides as well as bilinearity, hence perfection.
>
> **(c)** The tangent line is the kernel of $(D_1E(P),D_2E(P))$. If $D_2E(P)\ne0$, it is spanned by $(1,-D_1E(P)/D_2E(P))$. Pairing with $x-x_P$ gives $1$, so its cotangent class is nonzero and spans the one-dimensional space. Interchanging the two coordinates proves the assertion about $y-y_P$.
>
> **(d)** Let $A_m$ be the localization and $M=mA_m$. The inclusion $m^2\subset m\cap M^2$ holds directly. If $s\in m\cap M^2$, write $s=r/t$ with $r\in m^2$ and $t\notin m$, clearing the finitely many denominators in a sum of products. Since $A/m=K$ is a field, choose $v\in A$ with $1-tv\in m$. The equation $st=r$ in the domain gives
> $$
> s=s(1-tv)+rv\in m^2.
> $$
> Thus the reverse inclusion holds.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 270 / PDF p. 283. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Appendix:** Hints (a), (c), and (d), printed p. 425 / PDF p. 436, were checked; the proof above expands them and supplies (b).
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

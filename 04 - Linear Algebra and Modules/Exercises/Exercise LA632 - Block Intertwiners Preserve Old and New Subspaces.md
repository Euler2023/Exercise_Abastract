---
title: "Exercise LA632: Block Intertwiners Preserve Old and New Subspaces"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.6, Exercise 5.6.3, printed p. 190, PDF p. 204"
source_refs:
  - "S7/ch-5/sec-6/ex-3"
created: 2026-10-28
---

# Exercise LA632: Block Intertwiners Preserve Old and New Subspaces

## Problem Statement

> [!question] Original Exercise 5.6.3
> (a) Show that the first diagram commutes. (Hints for this exercise are at the end of the book.)
>
> (b) Show that the second diagram commutes.
>
> (c) Explain how the two diagrams show that $S_k(\Gamma_1(N))^{\mathrm{old}}$ is stable under all $T_n$ and $\langle n\rangle$.
>
> (d) How does showing that $S_k(\Gamma_1(N))^{\mathrm{old}}$ is also stable under the adjoints of $T_n$ and $\langle n\rangle$ for all $n$ establish the rest of the proposition?
>
> (e) Show that the third diagram commutes.
>
> Here $p\mid N$, $L=N/p$, $i_p(f,g)=f+g[\alpha_p]_k$, and $w_L=[\left(\begin{smallmatrix}0&1\\-L&0\end{smallmatrix}\right)]_k$. The three diagrams in the source assert, respectively,
> $$
> T_Ni_p=i_p\begin{pmatrix}T_L&0\\0&T_L\end{pmatrix},\qquad
> T_{p,N}i_p=i_p\begin{pmatrix}T_{p,L}&p^{k-1}I\\-\langle p\rangle_L&0\end{pmatrix},\qquad
> w_Ni_p=i_p\begin{pmatrix}0&p^{k-2}w_L\\w_L&0\end{pmatrix}.
> $$
> In the first formula $T$ is $\langle d\rangle$ with $(d,N)=1$, or $T_q$ for a prime $q\ne p$. The proposition is stability of both the oldspace and its Petersson orthogonal complement, the newspace.

## Hints

> [!hint]- Hint 1
> Compare coefficients using $a_m(T_qh)=a_{qm}(h)+q^{k-1}a_{m/q}(\langle q\rangle h)$, with nonintegral indices interpreted as zero.

> [!hint]- Hint 2
> At $q=p\mid N$ only the first term remains at level $N$. For adjoints, use $T_n^*=w_NT_nw_N^{-1}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Use the slash convention $f[\gamma]_k=(\det\gamma)^{k-1}(c\tau+d)^{-k}f(\gamma\tau)$, and write $V_p=[\alpha_p]_k$. Thus $a_m(V_ph)=p^{k-1}a_{m/p}(h)$.
>
> **(a), diamond operators.** Choose $\gamma\in\Gamma_0(N)$ with lower-right entry $d$ modulo $N$. It also represents $\langle d\rangle$ at level $L$. Hence the diamond operator commutes with inclusion. Furthermore $\alpha_p\gamma\alpha_p^{-1}$ is integral: its lower-left entry is $c/p$, divisible by $L$, and its lower-right entry is still $d$. It therefore represents the level-$L$ diamond. The slash law gives $\langle d\rangle_NV_ph=V_p\langle d\rangle_Lh$. This proves the first formula for diamonds.
>
> For a prime $q\ne p$, the two levels have the same condition $q\mid L$ or $q\nmid L$. The coefficient formula from Proposition 5.3.1 [S7, printed p.180/PDF p.194] is
> $$
> a_m(T_qh)=a_{qm}(h)+q^{k-1}a_{m/q}(\langle q\rangle h),
> $$
> where $\langle q\rangle=0$ if $q$ divides the level. It proves compatibility with inclusion. Because $p\ne q$, divisibility by $p$ of $qm$ and $m/q$ is equivalent to divisibility by $p$ of $m$ in each nonzero term. Substitution of the formula for $V_p$ and the diamond identity already proved gives $T_{q,N}V_p=V_pT_{q,L}$. This establishes the first diagram.
>
> **(b).** At level $N$, $p\mid N$ gives $a_m(T_{p,N}h)=a_{pm}(h)$. For $f$ of level $L$, the formula at level $L$ gives
> $$
> T_{p,N}f=T_{p,L}f-V_p\langle p\rangle_Lf.
> $$
> This also covers $p\mid L$, since then its diamond is zero. For $g$ of level $L$,
> $$
> a_m(T_{p,N}V_pg)=p^{k-1}a_m(g),
> $$
> so $T_{p,N}V_pg=p^{k-1}g$. Adding these identities proves the second displayed matrix formula.
>
> **(c).** Each prime-level degeneracy image is preserved by all diamonds and all prime $T_q$, using the first diagram when $q\ne p$ and the second when $q=p$. The oldspace is the sum of those images, so it is preserved as well. The Hecke relations
> $$
> T_{q^{r+1}}=T_qT_{q^r}-q^{k-1}\langle q\rangle T_{q^{r-1}},\qquad T_{mn}=T_mT_n\quad((m,n)=1)
> $$
> express every $T_n$ in these operators, proving the required stability.
>
> **(d).** If $x\in\mathcal O_N^\perp$ and $y\in\mathcal O_N$, then $\langle Tx,y\rangle=\langle x,T^*y\rangle=0$ whenever $T^*\mathcal O_N\subset\mathcal O_N$. Thus every such $T$ preserves the newspace. For good diamonds, the adjoint is the inverse diamond; for the others both operator and adjoint are zero. For all $n$, the Fricke adjoint identity of Exercise 5.5.1 is $T_n^*=w_NT_nw_N^{-1}$. Part (e) preserves the oldspace under $w_N$. Since $w_N^2=(-1)^kN^{k-2}I$, its inverse also preserves that space. Combining this with (c) proves adjoint stability and hence all of Proposition 5.6.2.
>
> **(e).** Put $W_L=\left(\begin{smallmatrix}0&1\\-L&0\end{smallmatrix}\right)$. Direct multiplication gives
> $$
> W_L\alpha_p=W_N,\qquad \alpha_pW_N=pW_L.
> $$
> A scalar matrix $pI$ acts by $p^{k-2}$. Hence $w_Nf=V_pw_Lf$ and $w_NV_pg=p^{k-2}w_Lg$. Their sum is exactly the third diagram's asserted formula.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.6.3, printed p. 190 / PDF p. 204]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** All three diagrams and Proposition 5.6.2 are on printed pp.189–190/PDF pp.203–204; the appendix hints for (a)–(e) were checked on printed p.422/PDF p.433. The Fourier coefficient and adjoint identities used above are explicitly identified rather than assumed from the diagrams.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

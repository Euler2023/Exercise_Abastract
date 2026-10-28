---
title: "Exercise LA627: Hecke Eigenvectors in Weight Two Eisenstein Blocks"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.2, Exercise 5.2.6, printed pp. 177\u2013178, PDF pp. 191\u2013192"
source_refs:
  - "S7/ch-5/sec-2/ex-6"
created: 2026-10-28
---

# Exercise LA627: Hecke Eigenvectors in Weight Two Eisenstein Blocks

## Problem Statement

> [!question] Original Exercise 5.2.6
> Let $N$ be a positive integer. Renormalize the weight $2$ Eisenstein series to $E_2(\tau)=-1/24+\sum_{n\geq1}\sigma(n)q^n$ where $\tau\in\mathcal H$ and $q=e^{2\pi i\tau}$. For any divisor $t>1$ of $N$ define $f_t\in M_2(\Gamma_0(N))$ to be
> $$
> f_t(\tau)=E_2(\tau)-tE_2(t\tau),\qquad\tau\in\mathcal H.
> $$
> (a) Show that for any prime $p$,
> $$
> T_p(f_t)=\begin{cases}
> (1+p)f_t&\text{if }p\nmid N,\\
> (1+p)f_t+f_p-f_{pt}&\text{if }p\mid N,\ p\nmid t,\\
> f_p+pf_{t/p}&\text{if }p\mid t.
> \end{cases}
> $$
> (A hint for this exercise is at the end of the book.)
>
> (b) Let $q$ be prime (here $q$ is not $e^{2\pi i\tau}$). Use Theorem 4.6.2 and part (a) to show that the two functions $f_q$ and $(1+q)f_q-f_{q^2}$ represent a Hecke eigenfunction basis of $E_2(\Gamma_0(q^2))$.
>
> (c) Let $q$ and $r$ be distinct primes. Use Theorem 4.6.2 and part (a) to show that the three functions $f_q+f_r-f_{qr}$ and $f_q+qf_r-f_{qr}$ and $rf_q+f_r-f_{qr}$ represent a Hecke eigenfunction basis of $E_2(\Gamma_0(qr))$.
>
> (d) Note that the definition of $f_t$ extends to $f_1=0$. Let $p\mid N$, $t\mid N$, $p\nmid t$. Show that $f_t-f_{pt}$ is a Hecke eigenfunction with $T_p$-eigenvalue $1$. Use this to show that if $q,r,u$ are distinct primes then the function $f=f_1-f_q-f_r-f_u+f_{qr}+f_{qu}+f_{ru}-f_{qru}$ is a Hecke eigenfunction with eigenvalues $\lambda_p=1$ for $p=q,r,u$ (this generalizes the first function in part (c)), and similarly for the function $f=\sum_{d\mid N}(-1)^{\varepsilon(d)}f_d$ where $N$ is squarefree and $\varepsilon(d)$ is the number of prime factors of $d$.

> [!warning] Source issue and corrected scope
> Part (b) incorrectly calls two forms a basis of the entire Eisenstein space for an arbitrary prime $q$: its dimension is $q$. The correct claim is a basis of the two-dimensional trivial-pair block, or the full space when $q=2$. In part (d), $f_t-f_{pt}$ is generally only a $T_p$ eigenvector, rather than a simultaneous eigenfunction for all Hecke operators. The squarefree conclusion is correct for $N>1$. The printed statements are preserved above; explicit checks and the corrected conclusions are proved below.

## Hints

> [!hint]- Hint 1
> Apply the coefficient operators $U_p(\sum a_nq^n)=\sum a_{pn}q^n$ and $V_tF(\tau)=F(t\tau)$ to $E_2$.

> [!hint]- Hint 2
> Use $\sigma(pn)=(1+p)\sigma(n)-p\sigma(n/p)$, with the last term zero when $p\nmid n$.

> [!hint]- Hint 3
> At level $qr$, compute the eigenvalue pairs for $T_q,T_r$. For squarefree $N$, pair the divisors $d$ and $pd$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> We prove the printed formulas and the corrected scope of (b) and the first sentence of (d).
>
> **(a).** Write $E=E_2$ and define $U_p,V_t$ as in the hint, including the constant coefficient. For $n=p^em$ with $p\nmid m$,
> $$
> \sigma(n)=\sigma(m)(1+p+\cdots+p^e).
> $$
> Subtracting the two finite geometric sums proves $\sigma(pn)=(1+p)\sigma(n)-p\sigma(n/p)$. At the constant coefficient the same operator identity holds because $(1+p)(-1/24)-p(-1/24)=-1/24$. Therefore
> $$
> U_pE=(1+p)E-pV_pE.
> $$
> Directly inspecting coefficients gives $U_pV_t=V_tU_p$ if $p\nmid t$, and $U_pV_t=V_{t/p}$ if $p\mid t$. Formula (5.4) [S7, printed p. 171 / PDF p. 185] says $T_p=U_p+pV_p$ on weight-two forms of trivial character if $p\nmid N$, and $T_p=U_p$ if $p\mid N$.
>
> If $p\nmid N$, then $p\nmid t$, and
> $$
> U_pf_t=(1+p)f_t-pV_pf_t,
> \qquad T_pf_t=(1+p)f_t.
> $$
> If $p\mid N$ and $p\nmid t$, then
> $$
> \begin{aligned}
> T_pf_t&=(1+p)(E-tV_tE)-pV_pE+ptV_{pt}E\\
> &=(1+p)f_t+f_p-f_{pt}.
> \end{aligned}
> $$
> If $p\mid t$, then
> $$
> T_pf_t=(1+p)E-pV_pE-tV_{t/p}E=f_p+pf_{t/p}.
> $$
> These identities include the constant coefficient, so equality follows for the whole holomorphic functions.
>
> **(b), corrected block statement.** At level $q^2$,
> $$
> T_qf_q=f_q,\qquad T_qf_{q^2}=(1+q)f_q.
> $$
> Thus $f_q$ and $g=(1+q)f_q-f_{q^2}$ have eigenvalues $1$ and $0$ under $T_q$. For every prime $\ell\ne q$, part (a) gives the common eigenvalue $1+\ell$. Diamond operators act trivially on these $\Gamma_0$ forms. The two forms are independent: their ambient basis candidates $f_q,f_{q^2}$ have coefficient pairs at indices $1,q$ equal to $(1,1)$ and $(1,1+q)$, whose determinant is $q\ne0$. Hence they form a simultaneous eigenbasis of $\operatorname{span}\{f_q,f_{q^2}\}$.
>
> This block is not the full Eisenstein space for $q>2$. Theorem 4.6.2 [printed p. 133 / PDF p. 147] also contributes $E_2^{\psi,\psi^{-1}}$ for every nontrivial primitive character $\psi$ modulo $q$. There are $q-2$ such characters. Together with the two trivial-pair forms, the full dimension is $q$. For $q=3$, the quadratic character modulo $3$ already supplies a third basis form. Thus the printed full-space claim holds only for $q=2$.
>
> **(c).** Theorem 4.6.2 gives precisely the three basis forms $f_q,f_r,f_{qr}$ at squarefree level $qr$: a pair of inverse primitive characters with trivial product has equal conductors, whose square must divide $qr$, so both conductors are $1$. The allowable nontrivial scaling factors are $q,r,qr$.
>
> Put $g_1=f_q+f_r-f_{qr}$, $g_2=f_q+qf_r-f_{qr}$, and $g_3=rf_q+f_r-f_{qr}$. Part (a) gives
> $$
> \begin{array}{lll}
> T_qf_q=f_q,&T_qf_r=(1+q)f_r+f_q-f_{qr},&T_qf_{qr}=f_q+qf_r,\\
> T_rf_r=f_r,&T_rf_q=(1+r)f_q+f_r-f_{qr},&T_rf_{qr}=f_r+rf_q.
> \end{array}
> $$
> Substituting and collecting coefficients gives the eigenvalue pairs $(T_q,T_r)$:
> $$
> g_1:(1,1),\qquad g_2:(q,1),\qquad g_3:(1,r).
> $$
> All other prime Hecke operators act by $1+\ell$. These forms are independent: in a relation $c_1g_1+c_2g_2+c_3g_3=0$, applying $T_q-I$ gives $(q-1)c_2g_2=0$, hence $c_2=0$; applying $T_r-I$ gives $c_3=0$, then $c_1=0$. Each $g_i$ is nonzero, since its first coefficient is respectively $1,q,r$. They therefore form the required full eigenbasis.
>
> **(d).** Subtract the second and third formulas of (a):
> $$
> T_p(f_t-f_{pt})=(1+p)f_t+f_p-f_{pt}-(f_p+pf_t)=f_t-f_{pt}.
> $$
> This proves the $T_p$ eigenvector assertion. It does not imply that every other Hecke operator has the same vector as an eigenvector. For $N=6,p=2,t=3$,
> $$
> T_3(f_3-f_6)=f_3-(f_3+3f_2)=-3f_2.
> $$
> The coefficient at index $1$ is zero in $f_3-f_6$ and $-3$ in its displayed image, so they cannot be proportional.
>
> Now let $N>1$ be squarefree and write $F_N=\sum_{d\mid N}\mu(d)f_d$, where $\mu(d)=(-1)^{\varepsilon(d)}$. For a prime $p\mid N$, pair the divisors to get
> $$
> F_N=\sum_{d\mid N/p}\mu(d)(f_d-f_{pd}).
> $$
> Every summand is fixed by $T_p$, so $T_pF_N=F_N$. For $\ell\nmid N$, part (a) gives $T_\ell F_N=(1+\ell)F_N$. This time all prime operators have a common eigenvector. The recurrence and multiplicativity defining $T_n$ then give a common eigenvector for every $T_n$; diamonds are trivial. Finally, $\sum_{d\mid N}\mu(d)=\prod_{p\mid N}(1-1)=0$, and only $f_1=0$ is exceptional among the coefficient calculations, so the coefficient at index $1$ of $F_N$ is $\sum_{d>1}\mu(d)=-1$. Thus $F_N\ne0$. For three distinct primes its expansion is exactly the one printed in the problem. The case $N=1$ instead gives $F_1=f_1=0$, which is not an eigenform.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Eisenstein Series]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.2.6, printed pp. 177–178 / PDF pp. 191–192]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Proof inputs:** The Eisenstein basis theorem is imported from Theorem 4.6.2, printed p. 133 / PDF p. 147, checked on the original page image. The Hecke Fourier rule is (5.4), printed p. 171 / PDF p. 185. Appendix A, printed p. 421 / PDF p. 432, suggests checking the three coefficient cases.
- **Operator convention:** $E_2$ itself is quasimodular. The $U_p,V_t$ calculation takes place on its convergent Fourier series; the resulting $f_t$ are the holomorphic modular forms provided by Chapter 4. No modularity of $E_2$ itself is asserted.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
